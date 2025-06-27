import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BodySelector from "../common/BodySelector";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { api } from "../lib/api";

// Map each selected region to a human-readable location string
const mapBodyRegionsToLocations = (regions: string[]): string[] => {
  if (regions.length === 0) return ["General"];
  return regions.map((region) => {
    switch (region) {
      case "head":
        return "Head";
      case "neck":
        return "Neck";
      case "chest":
        return "Chest";
      case "abdomen":
        return "Abdomen";
      case "pelvis":
        return "Pelvis";
      case "leftUpperArm":
        return "Left Upper Arm";
      case "rightUpperArm":
        return "Right Upper Arm";
      case "leftForearm":
        return "Left Forearm";
      case "rightForearm":
        return "Right Forearm";
      case "leftHand":
        return "Left Hand";
      case "rightHand":
        return "Right Hand";
      case "leftThigh":
        return "Left Thigh";
      case "rightThigh":
        return "Right Thigh";
      case "leftShin":
        return "Left Shin";
      case "rightShin":
        return "Right Shin";
      case "leftFoot":
        return "Left Foot";
      case "rightFoot":
        return "Right Foot";
      default:
        return "General";
    }
  });
};

const Diagnosed: React.FC = () => {
  const navigate = useNavigate();

  // --- State ---
  const [areas, setAreas] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isGettingDiagnosis, setIsGettingDiagnosis] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [finalResponse, setFinalResponse] = useState<{
    message: string;
    response: string;
  } | null>(null);
  const [answerInput, setAnswerInput] = useState<string>("");

  // --- Helpers ---
  const getHeaders = () => {
    const token = sessionStorage.getItem("token");
    const sessionId = sessionStorage.getItem("sessionId");
    return {
      "Content-Type": "application/json",
      ...(token && { "access-token": token }),
      ...(sessionId && { "X-Session-Id": sessionId }),
    };
  };

  // Start the questionnaire
  const startQuestionnaire = async () => {
    setLoading(true);
    setError(null);
    try {
      const body_locations = mapBodyRegionsToLocations(areas);
      const resp = await api.post(
        "/api/questions/initial",
        { answers: {}, body_locations },
        { headers: getHeaders() }
      );
      const sid = resp.headers["x-session-id"];
      if (sid) sessionStorage.setItem("sessionId", sid);
      setCurrentQuestion(resp.data.response);
      setStarted(true);
    } catch (e: any) {
      setError(e.message || "Failed to start");
    } finally {
      setLoading(false);
    }
  };

  // Handle both yes/no or free-form answers
  const handleAnswer = async (answer: string) => {
    if (!currentQuestion) return;
    setLoading(true);
    setError(null);

    try {
      const nextCount = answeredCount + 1;

      // After 7 answers, hit final endpoint
      if (nextCount >= 7) {
        const { data } = await api.post(
          "/api/questions/diagnos",
          { answer },
          { headers: getHeaders() }
        );
        setFinalResponse({ message: data.message, response: data.response });
        setCurrentQuestion(null);
        return;
      }

      // Otherwise get next question
      const { data } = await api.post(
        "/api/questions/next",
        { answer },
        { headers: getHeaders() }
      );

      const isDiagPayload =
        data.diagnosis && data.confidence && data.recommendation && data.advice;

      if (data.is_final || isDiagPayload) {
        setIsGettingDiagnosis(true);
        setCurrentQuestion(null);
        const payload = {
          diagnosis: data.diagnosis,
          confidence: data.confidence,
          recommendation: data.recommendation,
          advice: data.advice,
        };
        setTimeout(() => navigate("/diagnosis", { state: payload }), 800);
      } else if (data.response) {
        setCurrentQuestion(data.response);
        setAnsweredCount(nextCount);
      } else {
        setError("Unexpected response structure");
      }
    } catch (e: any) {
      setError(e.message || "Failed to continue");
    } finally {
      setLoading(false);
      setAnswerInput("");
    }
  };

  // Reset everything
  const handleRestart = () => {
    sessionStorage.removeItem("sessionId");
    setAreas([]);
    setStarted(false);
    setCurrentQuestion(null);
    setLoading(false);
    setError(null);
    setIsGettingDiagnosis(false);
    setAnsweredCount(0);
    setFinalResponse(null);
    setAnswerInput("");
  };

  // --- UI Components ---
  const ProgressBar = () => {
    if (!currentQuestion) return null;
    const { total_questions, question_number } = currentQuestion;
    return (
      <div className="flex items-center mb-4">
        {Array.from({ length: total_questions || 0 }).map((_, i) => (
          <div key={i} className="flex-1 mx-1">
            <div
              className={`h-2 rounded-full ${
                i < question_number ? "bg-blue-600" : "bg-gray-200"
              }`}
            />
          </div>
        ))}
      </div>
    );
  };

  const ErrorDisplay = error && (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
      <p className="text-red-700">{error}</p>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setError(null)}
        className="mt-2"
      >
        Dismiss
      </Button>
    </div>
  );

  const LoadingSpinner = () => (
    <div className="flex justify-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
    </div>
  );

  // --- Render ---

  // 1) Final response screen
  if (finalResponse) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <Card className="w-full max-w-md shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>{finalResponse.message}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">{finalResponse.response}</p>
            <Button onClick={handleRestart} className="w-full">
              Start Over
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // 2) Before starting
  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <Card className="w-full max-w-md shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>Select Areas of Discomfort</CardTitle>
          </CardHeader>
          <CardContent>
            {ErrorDisplay}
            <BodySelector selected={areas} onChange={setAreas} />
            <Button
              onClick={startQuestionnaire}
              disabled={loading || areas.length === 0}
              className="mt-6 w-full"
            >
              {loading ? "Starting..." : "Continue"}
            </Button>
            {loading && <LoadingSpinner />}
          </CardContent>
        </Card>
      </div>
    );
  }

  // 3) Waiting for AI → show spinner
  if (isGettingDiagnosis) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <Card className="w-full max-w-md shadow-lg rounded-xl text-center p-8">
          {ErrorDisplay}
          <LoadingSpinner />
          <h3 className="mt-4 mb-2 text-lg font-semibold">
            Analyzing Your Symptoms
          </h3>
          <p className="text-gray-600">Our AI is reviewing your responses...</p>
        </Card>
      </div>
    );
  }

  // 4) Question & answer step
  if (currentQuestion) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
        <Card className="w-full max-w-md shadow-lg rounded-xl mt-40">
          <CardContent>
            {ErrorDisplay}
            <CardTitle className="mb-4 text-lg">{currentQuestion}</CardTitle>
            <ProgressBar />

            {/* Yes / No buttons */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button
                variant="outline"
                onClick={() => handleAnswer("yes")}
                disabled={loading}
              >
                Yes
              </Button>
              <Button
                variant="outline"
                onClick={() => handleAnswer("no")}
                disabled={loading}
              >
                No
              </Button>
            </div>

            {/* Free-form answer */}
            <div className="mt-6">
              <textarea
                rows={3}
                value={answerInput}
                onChange={(e) => setAnswerInput(e.target.value)}
                placeholder="Or type any additional info..."
                disabled={loading}
                className="w-full p-2 border rounded-md focus:ring focus:outline-none"
              />
              <Button
                onClick={() => handleAnswer(answerInput.trim())}
                disabled={loading || !answerInput.trim()}
                className="mt-3 w-full"
              >
                {loading ? "Submitting..." : "Submit Text"}
              </Button>
            </div>

            {loading && <LoadingSpinner />}
          </CardContent>
        </Card>
      </div>
    );
  }

  // 5) Fallback
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Button onClick={handleRestart}>Restart</Button>
    </div>
  );
};

export default Diagnosed;
