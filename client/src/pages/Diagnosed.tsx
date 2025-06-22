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

  // Debug logging
  console.log("Diagnosed component render - State:", {
    started,
    currentQuestion,
    isGettingDiagnosis,
    loading,
    error,
  });

  // Additional debugging for currentQuestion structure
  if (currentQuestion) {
    console.log("Current question details:", {
      hasQuestion: !!currentQuestion.question,
      hasOptions: !!currentQuestion.options,
      optionsType: typeof currentQuestion.options,
      optionsLength: Array.isArray(currentQuestion.options)
        ? currentQuestion.options.length
        : "not array",
      question: currentQuestion.question,
      options: currentQuestion.options,
    });
  }

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
      console.log("Initial question data:", questionData);
      setCurrentQuestion(questionData);
      setStarted(true);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to start questionnaire";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Handle user answer and get next question or final diagnosis
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
      console.log("Full API response data:", responseData);

      // Check if this is diagnosis data (has diagnosis, confidence, recommendation, advice)
      const isDiagnosisData =
        responseData.diagnosis &&
        responseData.confidence &&
        responseData.recommendation &&
        responseData.advice;

      if (responseData.is_final || isDiagnosisData) {
        // We have reached the final question and have diagnosis data
        console.log("Final question reached with diagnosis:", responseData);
        setIsGettingDiagnosis(true);
        setCurrentQuestion(null); // Clear current question to show diagnosis loading

        // Extract the diagnosis data from the response
        const diagnosisData = {
          diagnosis: responseData.diagnosis,
          confidence: responseData.confidence,
          recommendation: responseData.recommendation,
          advice: responseData.advice,
        };

        console.log("Extracted diagnosis data:", diagnosisData);

        // Navigate directly to diagnosis page since we already have the data
        setTimeout(() => {
          navigate("/diagnosis", { state: diagnosisData });
        }, 1000); // Small delay to show the "analyzing" state
      } else if (responseData.question && responseData.options) {
        // Next question - make sure it has the required question properties
        console.log("Next question data:", responseData);
        setCurrentQuestion(responseData);
      } else {
        // Unexpected response format
        console.error("Unexpected response format:", responseData);
        setError("Received unexpected response format. Please try again.");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to get next question";
      setError(errorMessage);
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

  // Diagnosis loading phase
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

  // Question phase
  if (
    currentQuestion &&
    currentQuestion.question &&
    currentQuestion.options &&
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
              {currentQuestion.options.length > 0 ? (
                currentQuestion.options.map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    disabled={loading}
                    onClick={() => handleAnswer(option)}
                    className="text-left justify-start"
                  >
                    {option}
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

  // Loading phase - when currentQuestion exists but doesn't have all required data
  if (currentQuestion && loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-lg rounded-xl">
          <CardContent className="text-center py-8">
            <ErrorDisplay />
            <LoadingSpinner />
            <h3 className="text-lg font-semibold mt-4 mb-2">
              Loading Question...
            </h3>
            <p className="text-gray-600">Getting your next question...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Fallback - should not reach here, but let's provide better debugging info
  console.warn(
    "Reached fallback component - this shouldn't happen. Debug info:",
    {
      started,
      isGettingDiagnosis,
      currentQuestion,
      loading,
      error,
      hasQuestionData: currentQuestion
        ? {
            hasQuestion: !!currentQuestion.question,
            hasOptions: !!currentQuestion.options,
            optionsIsArray: Array.isArray(currentQuestion.options),
          }
        : null,
    }
  );

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
