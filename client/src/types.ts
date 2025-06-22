export interface GeminiQuestion {
  question: string;
  question_id: string;
  type: "yes/no" | "multiple_choice";
  options: string[];
  is_final: boolean;
  question_number: number;
  total_questions: number;
}

export interface GeminiDiagnosis {
  diagnosis: string;
  confidence: "high" | "medium" | "low";
  recommendation: "self_care" | "see_doctor";
  advice: string;
} 