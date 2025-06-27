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

  const getHeaders = () => {
    const token = sessionStorage.getItem("token");
    const sessionId = sessionStorage.getItem("sessionId");
    return {
      "Content-Type": "application/json",
      ...(token ? { "access-token": token } : {}),
      ...(sessionId ? { "X-Session-Id": sessionId } : {}),
    };
  };

  const startQuestionnaire = async () => {
    setLoading(true);
    setError(null);
    try {
      const bodyLocations = mapBodyRegionsToLocations(areas);
      const response = await api.post(
        "/api/questions/initial",
        { answers: {}, body_locations: bodyLocations },
        { headers: getHeaders() }
      );
      if (response.headers["x-session-id"]) {
        sessionStorage.setItem("sessionId", response.headers["x-session-id"]);
      }
      setCurrentQuestion(response.data.response);
      setStarted(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Failed to start questionnaire"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = async (answer: string) => {
    if (!currentQuestion) return;
    setLoading(true);
    setError(null);

    try {
      const nextCount = answeredCount + 1;

      // If we've reached 7 questions, fetch final diagnosis
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

      // Otherwise, fetch next question
      const { data } = await api.post(
        "/api/questions/next",
        { answer },
        { headers: getHeaders() }
      );

      const isDiag =
        data.diagnosis && data.confidence && data.recommendation && data.advice;

      if (data.is_final || isDiag) {
        setIsGettingDiagnosis(true);
        setCurrentQuestion(null);
        const diagPayload = {
          diagnosis: data.diagnosis,
          confidence: data.confidence,
          recommendation: data.recommendation,
          advice: data.advice,
        };
        setTimeout(() => {
          navigate("/diagnosis", { state: diagPayload });
        }, 1000);
      } else if (data.response) {
        setCurrentQuestion(data.response);
        setAnsweredCount(nextCount);
      } else {
        setError("Unexpected response format. Please try again.");
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Failed to get next question"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRestart = () => {
    setAreas([]);
    setStarted(false);
    setCurrentQuestion(null);
    setLoading(false);
    setError(null);
    setIsGettingDiagnosis(false);
    setAnsweredCount(0);
    setFinalResponse(null);
    sessionStorage.removeItem("sessionId");
  };

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

  const ErrorDisplay = () =>
    error ? (
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
    ) : null;

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );

  // Show final API response after 7 questions
  if (finalResponse) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>{finalResponse.message}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{finalResponse.response}</p>
            <Button onClick={handleRestart} className="w-full">
              Start Over
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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

  if (isGettingDiagnosis) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-lg rounded-xl">
          <CardContent className="text-center py-8">
            <ErrorDisplay />
            <LoadingSpinner />
            <h3 className="text-lg font-semibold mt-4 mb-2">
              Analyzing Your Symptoms
            </h3>
            <p className="text-gray-600">
              Our AI is reviewing your responses to provide a diagnosis...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
        <Card className="w-full max-w-md shadow-lg rounded-xl mt-60">
          <CardContent>
            <ErrorDisplay />
            <CardTitle className="mb-4 text-lg">{currentQuestion}</CardTitle>
            <ProgressBar />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Button
                variant="outline"
                disabled={loading}
                onClick={() => handleAnswer("yes")}
                className="text-center justify-center"
              >
                Yes
              </Button>
              <Button
                variant="outline"
                disabled={loading}
                onClick={() => handleAnswer("no")}
                className="text-center justify-center"
              >
                No
              </Button>
            </div>
            {loading && <LoadingSpinner />}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      ...
    </div>
  );
};

export default Diagnosed;
