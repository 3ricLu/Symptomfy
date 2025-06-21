import React, { useState } from "react";
import BodySelector from "../common/BodySelector";
import { Button } from "../components/ui/button";

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
  const [diagnosis, setDiagnosis] = useState<string>("");

  // track body-area selections
  const [areas, setAreas] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    const q = questions[current];
    setAnswers((prev) => ({ ...prev, [q.id]: option }));

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // simple rule-based placeholder diagnosis
      const hasFever =
        answers.q1 === "Yes" || (q.id === "q1" && option === "Yes");
      const hasCough =
        answers.q2 === "Yes" || (q.id === "q2" && option === "Yes");
      if (hasFever && hasCough) {
        setDiagnosis(
          `Symptoms on ${areas.join(
            ", "
          )} plus fever and cough suggest a flu-like illness. Please consider seeing a doctor.`
        );
      } else if (hasFever) {
        setDiagnosis(
          `Symptoms on ${areas.join(
            ", "
          )} with fever alone may suggest an infection. Monitor and rest.`
        );
      } else {
        setDiagnosis(
          `Symptoms on ${areas.join(
            ", "
          )} seem mild. Home care and rest should suffice.`
        );
      }
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrent(0);
    setFinished(false);
    setDiagnosis("");
    setAreas([]);
  };

  if (finished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <div className="max-w-lg text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#1C2D5A]">
            Diagnosis Result
          </h2>
          <p className="text-gray-700">{diagnosis}</p>
          <Button
            onClick={handleRestart}
            className="bg-[#2541B2] hover:bg-[#1C2D5A] text-white"
          >
            Restart
          </Button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4 pt-8 space-y-8">
      <h1 className="text-xl text-gray-600">
        Step 1: Select area(s) of discomfort
      </h1>
      <BodySelector selected={areas} onChange={setAreas} />

      <div className="max-w-lg w-full space-y-6">
        <div className="text-sm text-gray-600">
          Question {current + 1} of {questions.length}
        </div>

        <div className="bg-[#E9ECF5] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-[#1C2D5A]">{q.text}</h3>
          <div className="mt-4 flex flex-col space-y-3">
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
      </div>
    </div>
  );
};

export default Diagnosed;
