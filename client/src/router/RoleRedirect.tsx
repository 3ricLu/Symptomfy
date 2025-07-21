import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

const RoleRedirect = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authentication
  );
  const patientProfile = useSelector(
    (state: RootState) => state.patientProfile
  );
  const doctorProfile = useSelector((state: RootState) => state.doctorProfile);
  const adminProfile = useSelector((state: RootState) => state.adminProfile);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    // Check which profile is active to determine the user's role
    if (patientProfile.id !== "N/A") {
      navigate("/patient");
    } else if (doctorProfile.id !== "N/A") {
      navigate("/doctor");
    } else if (adminProfile.id !== "N/A") {
      navigate("/admin");
    } else {
      // If no role is set, redirect to profile to complete setup
      navigate("/profile");
    }
  }, [isAuthenticated, patientProfile, doctorProfile, adminProfile, navigate]);

  return <div>Redirecting...</div>;
};

export default RoleRedirect;
