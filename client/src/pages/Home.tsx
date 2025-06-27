import React from "react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { ClipboardCheck, Hospital, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

import hospitalImg from "../assets/images/image1.png";

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

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden text-[#1C2D5A] bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-32 pb-12 z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <img src={logo} alt="Symptomfy Logo" className="h-12 w-auto" />
          </div>
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Quick, Smart Health Decisions
          </h1>
          <p className="text-lg mb-8 max-w-xl">
            Symptomfy is your personal symptom checker. We guide you to the
            right care — whether that’s your doctor, the ER, or just rest — in
            under 2 minutes.
          </p>
          <Button
            onClick={() => navigate("/diagnosed")}
            className="bg-[#2541B2] hover:bg-[#1E40AF] text-white px-8 py-3 rounded-lg shadow-lg text-lg"
          >
            Get Diagnosed
          </Button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center mb-10 md:mb-0"
        >
          <div className="relative">
            <img
              src={hospitalImg}
              alt="Modern Hospital Hall"
              className="rounded-3xl shadow-2xl w-[400px] md:w-[480px] border-4 border-white"
              style={{ zIndex: 2, position: "relative" }}
            />
            <div className="absolute -top-8 -left-8 w-[400px] h-[320px] rounded-3xl" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <main className="flex flex-col items-center text-center px-6 py-8 relative z-10">
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

      {/* Footer */}
      <footer className="bg-[#1C2D5A] text-white py-8 mt-12 rounded-t-2xl shadow-inner relative z-10">
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
  );
};

export default Home;
