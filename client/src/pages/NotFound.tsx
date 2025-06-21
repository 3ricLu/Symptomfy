import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-white text-[#1C2D5A] flex items-center justify-center overflow-hidden">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          className="bg-[#2541B2] hover:bg-[#1C2D5A] text-white"
          onClick={() => navigate("/home")}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
