import React from "react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { ClipboardCheck, Hospital, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ClipboardCheck size={32} className="text-white" />,
    title: "Fast Symptom Checker",
    desc: "Answer a few questions and get a suggested course of action — in minutes.",
    bg: "#334155",
  },
  {
    icon: <Stethoscope size={32} className="text-white" />,
    title: "Book With a Doctor",
    desc: "Instantly book an appointment nearby if needed.",
    bg: "#1E40AF",
  },
  {
    icon: <Hospital size={32} className="text-white" />,
    title: "ER When Urgent",
    desc: "We alert you when emergency care is the best choice.",
    bg: "#059669",
  },
];

// Ensure your background.png is placed in the public/images folder
// Move src/assets/images/background.png → public/images/background.png

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden text-[#1C2D5A]">
      {/* Faded background image from public folder */}
      <img
        src="/images/background.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Content overlay with reduced opacity so background shows through */}
      <div className="relative z-10 bg-gradient-to-b from-white to-blue-50 bg-opacity-60">
        <header className="flex justify-between items-center max-w-7xl mx-auto p-6">
          <h1 className="text-2xl font-bold">Symptomfy</h1>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-[#1C2D5A]">
              Home
            </a>
            <a href="/about" className="hover:text-[#1C2D5A]">
              About
            </a>
            <a href="/contact" className="hover:text-[#1C2D5A]">
              Contact
            </a>
          </nav>
        </header>

        <main className="flex flex-col items-center text-center px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-5xl font-extrabold mb-4">
              Quick, Smart Health Decisions
            </h2>
            <p className="text-lg mb-6">
              Symptomfy is your personal symptom checker. We guide you to the
              right care — whether that’s your doctor, the ER, or just rest — in
              under 2 minutes.
            </p>
            <Button
              onClick={() => navigate("/diagnosed")}
              className="bg-[#334155] hover:bg-[#1E40AF] text-white px-8 py-3 rounded-lg shadow-lg"
            >
              Get Diagnosed
            </Button>
          </motion.div>

          <Separator className="w-64 my-8" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl shadow-lg p-6 text-white overflow-hidden"
                style={{ background: feature.bg }}
              >
                <svg
                  className="absolute top-0 right-0 w-32 opacity-20"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="50" fill="white" />
                </svg>
                <div className="relative mb-4">{feature.icon}</div>
                <h4 className="text-xl font-medium mb-2">{feature.title}</h4>
                <p className="text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </main>

        <footer className="bg-[#1C2D5A] text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
            <div>
              <h5 className="font-bold mb-2">Symptomfy</h5>
              <p className="text-sm">Your personal symptom checker.</p>
            </div>
            <div />
            <div>
              <h5 className="font-bold mb-2">Contact</h5>
              <p className="text-sm">Email: support@symptomfy.com</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
            </div>
          </div>
          <Separator className="my-6 border-gray-600" />
          <p className="text-center text-xs">
            © {new Date().getFullYear()} Symptomfy. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
