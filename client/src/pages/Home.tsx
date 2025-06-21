import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { CardContent } from "../components/ui/card";
import { ClipboardCheck, Hospital, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-[#1C2D5A]">
      {/* Headline */}
      <div className="max-w-2xl text-center mb-10">
        <h1 className="text-4xl font-extrabold leading-tight mb-4">
          Quick, Smart Health Decisions
        </h1>
        <p className="text-lg text-gray-700">
          Symptomfy is your personal symptom checker. We guide you to the right
          care — whether that’s your doctor, the ER, or just rest — in under 2
          minutes.
        </p>
        <Button
          className="mt-6 bg-[#2541B2] hover:bg-[#1C2D5A] text-white"
          onClick={() => navigate("/diagnosis")}
        >
          Get Diagnosed
        </Button>
      </div>

      <Separator className="w-64 mb-8" />

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
        <Card className="shadow-md hover:shadow-lg transition border-[#E0E7FF]">
          <CardContent className="p-6 text-center">
            <ClipboardCheck size={32} className="mx-auto text-[#2541B2] mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Symptom Checker</h3>
            <p className="text-sm text-gray-600">
              Answer a few questions and get a suggested course of action — in
              minutes.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition border-[#E0E7FF]">
          <CardContent className="p-6 text-center">
            <Stethoscope size={32} className="mx-auto text-[#2541B2] mb-4" />
            <h3 className="text-lg font-semibold mb-2">Book With a Doctor</h3>
            <p className="text-sm text-gray-600">
              If needed, you can instantly book an appointment with a doctor
              nearby.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition border-[#E0E7FF]">
          <CardContent className="p-6 text-center">
            <Hospital size={32} className="mx-auto text-[#2541B2] mb-4" />
            <h3 className="text-lg font-semibold mb-2">ER When Urgent</h3>
            <p className="text-sm text-gray-600">
              We alert you when symptoms suggest emergency care is the best
              choice.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
