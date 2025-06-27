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
import type { GeminiQuestion } from "../types";

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
  const [currentQuestion, setCurrentQuestion] = useState<GeminiQuestion | null>(
    null
  );
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isGettingDiagnosis, setIsGettingDiagnosis] = useState(false);

  const startQuestionnaire = async () => {
    setLoading(true);
    setError(null);

    try {
      const bodyLocations = mapBodyRegionsToLocations(areas);
      console.log(bodyLocations, "→ sending detailed locations");

      const response = await api.post("/api/questions/generate", {
        answers: {},
        body_locations: bodyLocations,
      });

      setCurrentQuestion(response.data);
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
      const updated = { ...answers, [currentQuestion.question_id]: answer };
      setAnswers(updated);

      const bodyLocations = mapBodyRegionsToLocations(areas);
      const { data } = await api.post("/api/questions/generate", {
        answers: updated,
        body_locations: bodyLocations,
      });

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
      } else if (data.question && Array.isArray(data.options)) {
        setCurrentQuestion(data);
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
    setAnswers({});
    setLoading(false);
    setError(null);
    setIsGettingDiagnosis(false);
  };

  const ProgressBar = () => {
    if (!currentQuestion) return null;
    const { total_questions, question_number } = currentQuestion;
    return (
      <div className="flex items-center mb-4">
        {Array.from({ length: total_questions }).map((_, i) => (
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

  if (
    currentQuestion &&
    currentQuestion.question &&
    Array.isArray(currentQuestion.options)
  ) {
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
              {currentQuestion.options.length ? (
                currentQuestion.options.map((opt) => (
                  <Button
                    key={opt}
                    variant="outline"
                    disabled={loading}
                    onClick={() => handleAnswer(opt)}
                    className="text-left justify-start"
                  >
                    {opt}
                  </Button>
                ))
              ) : (
                <p className="text-gray-500 text-center">
                  No options available
                </p>
              )}
            </div>
            {loading && <LoadingSpinner />}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Card className="max-w-md w-full shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle>Something went wrong</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            We encountered an unexpected error. Please try again.
          </p>
          <ErrorDisplay />
          <Button onClick={handleRestart} className="w-full">
            Start Over
          </Button>
          {import.meta.env.DEV && (
            <details className="mt-4 text-xs">
              <summary>Debug Info (Dev Only)</summary>
              <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto">
                {JSON.stringify(
                  {
                    started,
                    isGettingDiagnosis,
                    currentQuestion,
                    loading,
                    error,
                  },
                  null,
                  2
                )}
              </pre>
            </details>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Diagnosed;
