import React, { useState } from "react";
import BodySelector from "../common/BodySelector";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import axios from "axios";

interface Question {
  id: string;
  text: string;
  options: string[];
}

const questions: Question[] = [
  { id: "q1", text: "Do you have a fever?", options: ["Yes", "No"] },
  { id: "q2", text: "Are you experiencing a cough?", options: ["Yes", "No"] },
  {
    id: "q3",
    text: "Do you feel shortness of breath?",
    options: ["Yes", "No"],
  },
  { id: "q4", text: "Do you have a headache?", options: ["Yes", "No"] },
  { id: "q5", text: "Any loss of taste or smell?", options: ["Yes", "No"] },
];

const Diagnosed: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);
  const [recommendPhase, setRecommendPhase] = useState(false);
  const [diagnosis, setDiagnosis] = useState("");

  const [areas, setAreas] = useState<string[]>([]);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [geminiReply, setGeminiReply] = useState<string>("");

  const handleOptionClick = (option: string) => {
    const q = questions[current];
    setAnswers((prev) => ({ ...prev, [q.id]: option }));

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const hasFever =
        answers.q1 === "Yes" || (q.id === "q1" && option === "Yes");
      const hasCough =
        answers.q2 === "Yes" || (q.id === "q2" && option === "Yes");
      let result = "";
      if (hasFever && hasCough)
        result = `Symptoms on ${areas.join(
          ", "
        )} plus fever and cough suggest a flu-like illness.`;
      else if (hasFever)
        result = `Symptoms on ${areas.join(
          ", "
        )} with fever alone may suggest an infection.`;
      else
        result = `Symptoms on ${areas.join(
          ", "
        )} seem mild. Home care and rest should suffice.`;

      setDiagnosis(result);
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrent(0);
    setFinished(false);
    setDiagnosis("");
    setRecommendPhase(false);
    setAreas([]);
    setShowBookingDialog(false);
    setGeminiReply("");
  };

  const selectRecommendation = (choice: string) => {
    if (choice === "doctor") {
      setRecommendPhase(true);
    } else if (choice === "er") {
      window.location.href =
        "https://www.google.com/maps/search/emergency+room+near+me";
    }
  };

  const handleNearestClinic = async (prompt: string) => {
    try {
      const response = await axios.post("/api/gpt", { prompt });
      setGeminiReply(response.data.output);
    } catch (error: any) {
      console.error("Error fetching from GPT proxy:", error);
      setGeminiReply("Sorry, could not fetch clinic info right now.");
    }
  };

  // --- Render Finished Diagnosis ---
  if (finished && !recommendPhase) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#1C2D5A] px-6">
        <Card className="max-w-lg w-full">
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">Diagnosis</h2>
            <p className="text-gray-700 mb-4">{diagnosis}</p>
            <Separator className="mb-4" />
            <h3 className="text-xl mb-2">Next Steps</h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => selectRecommendation("er")}
              >
                Go to ER
              </Button>
              <Button
                className="w-full bg-[#2541B2] hover:bg-[#1C2D5A] text-white"
                onClick={() => selectRecommendation("doctor")}
              >
                See a Doctor
              </Button>
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

  // --- Render Doctor Options ---
  if (recommendPhase) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#1C2D5A] px-6">
        <Card className="max-w-lg w-full">
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">Doctor Options</h2>
            <Separator className="mb-4" />
            <div className="space-y-3">
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setRecommendPhase(false)}
              >
                Go Back
              </Button>
              <Dialog
                open={showBookingDialog}
                onOpenChange={setShowBookingDialog}
              >
                <DialogTrigger asChild>
                  <Button className="w-full bg-[#2541B2] hover:bg-[#1C2D5A] text-white">
                    Book with Family Doctor
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Book Appointment</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Booked!");
                      setShowBookingDialog(false);
                    }}
                    className="space-y-4"
                  >
                    <label className="block text-sm">Date & Time</label>
                    <input
                      type="datetime-local"
                      required
                      className="mt-1 block w-full border rounded p-2"
                    />
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setShowBookingDialog(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-[#2541B2] hover:bg-[#1C2D5A] text-white"
                      >
                        Confirm
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
              <Button
                className="w-full bg-[#2541B2] hover:bg-[#1C2D5A] text-white"
                onClick={() =>
                  handleNearestClinic(
                    "Find the nearest clinic near me that has low wait times."
                  )
                }
              >
                Find Nearest Clinic
              </Button>
            </div>
            {geminiReply && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <h4 className="font-semibold mb-1">Clinic Info:</h4>
                <p>{geminiReply}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // --- Render Symptom Questionnaire ---
  const q = questions[current];
  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-[#1C2D5A] px-6 pt-8 space-y-8">
      <Card className="w-full max-w-lg mt-24">
        <CardContent>
          <h1 className="text-xl text-gray-600 mb-4">
            Step 1: Select area(s) of discomfort
          </h1>
          <BodySelector selected={areas} onChange={setAreas} />
          <Separator className="my-6" />
          <div className="text-sm text-gray-600 mb-2">
            Question {current + 1} of {questions.length}
          </div>
          <div className="bg-[#E9ECF5] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#1C2D5A] mb-4">
              {q.text}
            </h3>
            <div className="flex flex-col space-y-3">
              {q.options.map((opt) => (
                <Button
                  key={opt}
                  onClick={() => handleOptionClick(opt)}
                  className="w-full bg-[#2541B2] hover:bg-[#1C2D5A] text-white"
                >
                  {opt}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Diagnosed;
