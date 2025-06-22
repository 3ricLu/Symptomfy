import React, { useState } from "react";
import BodySelector from "../common/BodySelector";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { api } from "../lib/api";

// TypeScript interfaces
interface GeminiQuestion {
  question: string;
  question_id: string;
  type: "yes/no" | "multiple_choice";
  options: string[];
  is_final: boolean;
  question_number: number;
  total_questions: number;
}

interface GeminiDiagnosis {
  diagnosis: string;
  confidence: "high" | "medium" | "low";
  recommendation: "self_care" | "see_doctor";
  advice: string;
}

// Map body selector regions to backend expected values
const mapBodyRegionToLocation = (regions: string[]): string => {
  if (regions.length === 0) return "general";

  const region = regions[0].toLowerCase();

  // Map specific body parts to general areas
  if (region.includes("head")) return "head";
  if (region.includes("neck")) return "head";
  if (region.includes("chest")) return "chest";
  if (region.includes("abdomen") || region.includes("pelvis")) return "abdomen";
  if (region.includes("back")) return "back";
  if (region.includes("arm") || region.includes("hand")) return "arms";
  if (
    region.includes("thigh") ||
    region.includes("shin") ||
    region.includes("foot")
  )
    return "legs";

  return "general";
};

const Diagnosed: React.FC = () => {
  const [areas, setAreas] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<GeminiQuestion | null>(
    null
  );
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);
  const [diagnosis, setDiagnosis] = useState<GeminiDiagnosis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendPhase, setRecommendPhase] = useState(false);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [geminiReply, setGeminiReply] = useState<string>("");

  // Booking state
  const [selectedTime, setSelectedTime] = useState<string>("");
  const availableTimes = [
    "2025-06-23 09:00 AM",
    "2025-06-23 10:00 AM",
    "2025-06-23 11:00 AM",
    "2025-06-23 02:00 PM",
    "2025-06-23 03:00 PM",
  ];

  // Start questionnaire by getting first question from backend
  const startQuestionnaire = async () => {
    setLoading(true);
    setError(null);

    try {
      const bodyLocation = mapBodyRegionToLocation(areas);
      const response = await api.post("/api/questions/generate", {
        answers: {},
        body_location: bodyLocation,
      });

      const questionData = response.data;
      setCurrentQuestion(questionData);
      setStarted(true);
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to start questionnaire");
    } finally {
      setLoading(false);
    }
  };

  // Handle user answer and get next question
  const handleAnswer = async (answer: string) => {
    if (!currentQuestion) return;

    setLoading(true);
    setError(null);

    try {
      // Update answers with current response
      const updatedAnswers = {
        ...answers,
        [currentQuestion.question_id]: answer,
      };
      setAnswers(updatedAnswers);

      const bodyLocation = mapBodyRegionToLocation(areas);
      const response = await api.post("/api/questions/generate", {
        answers: updatedAnswers,
        body_location: bodyLocation,
      });

      const responseData = response.data;

      if (responseData.is_final) {
        // We have a diagnosis
        setDiagnosis({
          diagnosis: responseData.diagnosis,
          confidence: responseData.confidence,
          recommendation: responseData.recommendation,
          advice: responseData.advice,
        });
        setFinished(true);
        setCurrentQuestion(null);
      } else {
        // Next question
        setCurrentQuestion(responseData);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to get next question");
    } finally {
      setLoading(false);
    }
  };

  const handleRestart = () => {
    setAreas([]);
    setStarted(false);
    setCurrentQuestion(null);
    setAnswers({});
    setFinished(false);
    setDiagnosis(null);
    setRecommendPhase(false);
    setShowBookingDialog(false);
    setGeminiReply("");
    setSelectedTime("");
    setLoading(false);
    setError(null);
  };

  const selectRecommendation = (choice: "doctor" | "er") => {
    if (choice === "doctor") {
      setRecommendPhase(true);
    } else {
      window.open(
        "https://www.google.com/maps/search/emergency+room+near+me",
        "_blank"
      );
    }
  };

  const handleNearestClinic = async (prompt: string) => {
    try {
      const { data } = await api.post("/api/gpt", { prompt });
      setGeminiReply(data.output);
    } catch {
      setGeminiReply("Could not fetch clinic info at this time.");
    }
  };

  // Progress bar component
  const ProgressBar = () => {
    if (!currentQuestion) return null;

    const totalQuestions = currentQuestion.total_questions;
    const currentQuestionNum = currentQuestion.question_number;

    return (
      <div className="flex items-center mb-4">
        {Array.from({ length: totalQuestions }, (_, idx) => (
          <div key={idx} className="flex-1 mx-1">
            <div
              className={`h-2 rounded-full ${
                idx < currentQuestionNum ? "bg-blue-600" : "bg-gray-200"
              }`}
            />
          </div>
        ))}
      </div>
    );
  };

  // Error display component
  const ErrorDisplay = () => {
    if (!error) return null;

    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
        <p className="text-red-700">{error}</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => setError(null)}
        >
          Dismiss
        </Button>
      </div>
    );
  };

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );

  // Body area selection phase
  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <Card className="w-full max-w-md shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>Select Areas of Discomfort</CardTitle>
          </CardHeader>
          <CardContent>
            <ErrorDisplay />
            <BodySelector selected={areas} onChange={setAreas} />
            <Button
              disabled={!areas.length || loading}
              className="mt-6 w-full"
              onClick={startQuestionnaire}
            >
              {loading ? "Starting..." : "Continue"}
            </Button>
            {loading && <LoadingSpinner />}
          </CardContent>
        </Card>
      </div>
    );
  }

  // Question phase
  if (currentQuestion && !finished) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
        <Card className="w-full max-w-md shadow-lg rounded-xl mt-60">
          <CardContent>
            <ErrorDisplay />
            <CardTitle className="mb-4 text-lg">
              {currentQuestion.question}
            </CardTitle>
            <ProgressBar />
            <div className="grid grid-cols-1 gap-3 mt-4">
              {currentQuestion.options.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  disabled={loading}
                  onClick={() => handleAnswer(option)}
                  className="text-left justify-start"
                >
                  {option}
                </Button>
              ))}
            </div>
            {loading && <LoadingSpinner />}
          </CardContent>
        </Card>
      </div>
    );
  }

  // Diagnosis complete phase
  if (finished && diagnosis && !recommendPhase) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <Card className="max-w-md w-full shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>Diagnosis Complete</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-lg">{diagnosis.diagnosis}</h3>
                <p className="text-sm text-gray-600 capitalize">
                  Confidence: {diagnosis.confidence}
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Recommendation:</h4>
                <p className="text-gray-700">{diagnosis.advice}</p>
              </div>
            </div>
            <Separator className="mb-6" />
            <div className="space-y-3">
              {diagnosis.recommendation === "see_doctor" ? (
                <>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => selectRecommendation("er")}
                  >
                    Go to Emergency Care
                  </Button>
                  <Button
                    className="w-full"
                    onClick={() => selectRecommendation("doctor")}
                  >
                    Consult Family Doctor
                  </Button>
                </>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    Self-care recommended
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    Follow the advice above. If symptoms worsen, consult a
                    healthcare provider.
                  </p>
                </div>
              )}
              <Button
                variant="ghost"
                className="w-full"
                onClick={handleRestart}
              >
                Start Over
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Doctor options phase
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Card className="max-w-md w-full shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle>Doctor Options</CardTitle>
        </CardHeader>
        <CardContent>
          <Separator className="mb-4" />
          <div className="space-y-4">
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => setRecommendPhase(false)}
            >
              Back to Diagnosis
            </Button>
            <Dialog
              open={showBookingDialog}
              onOpenChange={(open) => {
                setShowBookingDialog(open);
                if (!open) setSelectedTime("");
              }}
            >
              <DialogTrigger asChild>
                <Button className="w-full">Book with Family Doctor</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule Appointment</DialogTitle>
                </DialogHeader>
                <div className="space-y-2 mt-4">
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                <DialogFooter className="mt-6">
                  <Button
                    className="w-full"
                    disabled={!selectedTime}
                    onClick={() => {
                      console.log("Booked appointment at", selectedTime);
                      setShowBookingDialog(false);
                    }}
                  >
                    Confirm
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button
              className="w-full"
              onClick={() =>
                handleNearestClinic("Find nearest clinic with low wait times.")
              }
            >
              Find Nearest Clinic
            </Button>
          </div>
          {geminiReply && (
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Clinic Info</h4>
              <p className="text-gray-600">{geminiReply}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Diagnosed;
