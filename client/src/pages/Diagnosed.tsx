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
import axios from "axios";

interface Question {
  id: string;
  text: string;
  options: string[];
}

// Predefined questions for common areas
const areaQuestions: Record<string, Question[]> = {
  Head: [
    {
      id: "q_head_pain",
      text: "Do you feel pain in your head?",
      options: ["Yes", "No"],
    },
    {
      id: "q_head_duration",
      text: "How long have you experienced head discomfort?",
      options: ["<1 day", "1-3 days", ">3 days"],
    },
    {
      id: "q_head_severity",
      text: "How severe is your head discomfort?",
      options: ["Mild", "Moderate", "Severe"],
    },
  ],
  Chest: [
    {
      id: "q_chest_pain",
      text: "Are you experiencing chest pain?",
      options: ["Yes", "No"],
    },
    {
      id: "q_chest_cough",
      text: "Are you experiencing a cough?",
      options: ["Yes", "No"],
    },
    {
      id: "q_chest_breath",
      text: "Do you have shortness of breath?",
      options: ["Yes", "No"],
    },
  ],
  Arms: [
    {
      id: "q_arm_pain",
      text: "Do you feel pain in your arms?",
      options: ["Yes", "No"],
    },
    {
      id: "q_arm_numbness",
      text: "Are you experiencing numbness in your arms?",
      options: ["Yes", "No"],
    },
    {
      id: "q_arm_swelling",
      text: "Do you have swelling in your arms?",
      options: ["Yes", "No"],
    },
  ],
  Legs: [
    {
      id: "q_leg_pain",
      text: "Do you feel pain in your legs?",
      options: ["Yes", "No"],
    },
    {
      id: "q_leg_swelling",
      text: "Do you have swelling in your legs?",
      options: ["Yes", "No"],
    },
    {
      id: "q_leg_mobility",
      text: "Is your leg mobility affected?",
      options: ["Yes", "No"],
    },
  ],
  Abdomen: [
    {
      id: "q_abd_pain",
      text: "Are you experiencing abdominal pain?",
      options: ["Yes", "No"],
    },
    {
      id: "q_abd_nausea",
      text: "Do you feel nauseous?",
      options: ["Yes", "No"],
    },
    {
      id: "q_abd_bloating",
      text: "Do you have bloating?",
      options: ["Yes", "No"],
    },
  ],
  Back: [
    {
      id: "q_back_pain",
      text: "Do you have back pain?",
      options: ["Yes", "No"],
    },
    {
      id: "q_back_stiffness",
      text: "Do you feel stiffness in your back?",
      options: ["Yes", "No"],
    },
    {
      id: "q_back_posture",
      text: "Does posture affect your back discomfort?",
      options: ["Yes", "No"],
    },
  ],
};

// Fallback when no areas selected
const generalQuestions: Question[] = [
  {
    id: "q_general_fever",
    text: "Do you have a fever?",
    options: ["Yes", "No"],
  },
  {
    id: "q_general_cough",
    text: "Are you experiencing a cough?",
    options: ["Yes", "No"],
  },
  {
    id: "q_general_fatigue",
    text: "Are you feeling fatigued?",
    options: ["Yes", "No"],
  },
];

const Diagnosed: React.FC = () => {
  const [areas, setAreas] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);
  const [recommendPhase, setRecommendPhase] = useState(false);
  const [diagnosis, setDiagnosis] = useState("");
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

  // Generate questions
  const startQuestionnaire = () => {
    const mapped = areas.flatMap((area) => {
      const key = area.charAt(0).toUpperCase() + area.slice(1).toLowerCase();
      if (areaQuestions[key]) return areaQuestions[key];
      return [
        {
          id: `q_${key}_pain`,
          text: `Do you feel pain in your ${area.toLowerCase()}?`,
          options: ["Yes", "No"],
        },
        {
          id: `q_${key}_duration`,
          text: `How long have you had discomfort in your ${area.toLowerCase()}?`,
          options: ["<1 day", "1-3 days", ">3 days"],
        },
      ];
    });
    setQuestions(mapped.length ? mapped : generalQuestions);
    setCurrent(0);
    setStarted(true);
  };

  // Handle answers
  const handleOptionClick = (option: string) => {
    const q = questions[current];
    setAnswers((prev) => ({ ...prev, [q.id]: option }));
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      const positiveCount =
        Object.values(answers).filter((a) => a === "Yes").length +
        (option === "Yes" ? 1 : 0);
      const result =
        positiveCount >= Math.ceil(questions.length / 2)
          ? "Your symptoms suggest you should seek medical advice."
          : "Your symptoms appear mild. Home care and rest are recommended.";
      setDiagnosis(result);
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setAreas([]);
    setStarted(false);
    setQuestions([]);
    setCurrent(0);
    setAnswers({});
    setFinished(false);
    setRecommendPhase(false);
    setDiagnosis("");
    setShowBookingDialog(false);
    setGeminiReply("");
    setSelectedTime("");
  };

  const selectRecommendation = (choice: "doctor" | "er") => {
    if (choice === "doctor") setRecommendPhase(true);
    else
      window.open(
        "https://www.google.com/maps/search/emergency+room+near+me",
        "_blank"
      );
  };

  const handleNearestClinic = async (prompt: string) => {
    try {
      const { data } = await axios.post("/api/gpt", { prompt });
      setGeminiReply(data.output);
    } catch {
      setGeminiReply("Could not fetch clinic info at this time.");
    }
  };

  // Progress bar component
  const ProgressBar = () => (
    <div className="flex items-center mb-4">
      {questions.map((_, idx) => (
        <div key={idx} className="flex-1 mx-1">
          <div
            className={`h-2 rounded-full ${
              idx <= current ? "bg-blue-600" : "bg-gray-200"
            }`}
          />
        </div>
      ))}
    </div>
  );

  // Render phases
  if (!started)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <Card className="w-full max-w-md shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>Select Areas of Discomfort</CardTitle>
          </CardHeader>
          <CardContent>
            <BodySelector selected={areas} onChange={setAreas} />
            <Button
              disabled={!areas.length}
              className="mt-6 w-full"
              onClick={startQuestionnaire}
            >
              Continue
            </Button>
          </CardContent>
        </Card>
      </div>
    );

  if (!finished) {
    const q = questions[current];
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
        <Card className="w-full max-w-md shadow-lg rounded-xl mt-60">
          <CardContent>
            <CardTitle className="mb-4 text-lg">{q.text}</CardTitle>
            <ProgressBar />
            <div className="grid grid-cols-2 gap-4 mt-4">
              {q.options.map((opt) => (
                <Button key={opt} onClick={() => handleOptionClick(opt)}>
                  {opt}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (finished && !recommendPhase) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <Card className="max-w-md w-full shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle>Diagnosis Complete</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">{diagnosis}</p>
            <Separator className="mb-6" />
            <div className="space-y-3">
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
