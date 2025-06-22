import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import type { GeminiDiagnosis } from "../types";

const DiagnosisPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get diagnosis data from router state
  const diagnosis = location.state as GeminiDiagnosis | null;

  // If no diagnosis data, redirect to home
  if (!diagnosis) {
    navigate("/");
    return null;
  }

  const handleFindDoctor = () => {
    window.open(
      "https://www.google.com/maps/search/doctor+clinic+near+me",
      "_blank"
    );
  };

  const handleStartOver = () => {
    navigate("/");
  };

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case "high":
        return "text-green-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getRecommendationBadge = (recommendation: string) => {
    if (recommendation === "see_doctor") {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          Medical consultation recommended
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Self-care recommended
        </span>
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Card className="max-w-2xl w-full shadow-lg rounded-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Diagnosis Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Condition */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {diagnosis.diagnosis}
            </h2>
            <p
              className={`text-lg font-medium ${getConfidenceColor(
                diagnosis.confidence
              )}`}
            >
              Confidence:{" "}
              {diagnosis.confidence.charAt(0).toUpperCase() +
                diagnosis.confidence.slice(1)}
            </p>
            <div className="mt-3">
              {getRecommendationBadge(diagnosis.recommendation)}
            </div>
          </div>

          <Separator />

          {/* Advice */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Recommended Action
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                {diagnosis.advice}
              </p>
            </div>
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="space-y-3">
            {diagnosis.recommendation === "see_doctor" ? (
              <Button
                onClick={handleFindDoctor}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                Find a Doctor
              </Button>
            ) : (
              <Button variant="outline" disabled className="w-full" size="lg">
                Self-care recommended
              </Button>
            )}

            <Button
              variant="ghost"
              onClick={handleStartOver}
              className="w-full"
              size="lg"
            >
              Start Over
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> This diagnosis is AI-generated and
              should not replace professional medical advice. If you have
              serious concerns about your health, please consult with a
              qualified healthcare provider.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiagnosisPage;
