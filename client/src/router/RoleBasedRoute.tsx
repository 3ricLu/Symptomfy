import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

interface RoleBasedRouteProps {
  allowedRoles: string[];
  redirectPath?: string;
}

const RoleBasedRoute = ({
  allowedRoles,
  redirectPath = "/",
}: RoleBasedRouteProps) => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authentication
  );
  const patientProfile = useSelector(
    (state: RootState) => state.patientProfile
  );
  const doctorProfile = useSelector((state: RootState) => state.doctorProfile);
  const adminProfile = useSelector((state: RootState) => state.adminProfile);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check which profile is active to determine the user's role
  let userRole: string | undefined;
  if (patientProfile.id !== "N/A") {
    userRole = "patient";
  } else if (doctorProfile.id !== "N/A") {
    userRole = "doctor";
  } else if (adminProfile.id !== "N/A") {
    userRole = "admin";
  }

  if (
    !userRole ||
    !allowedRoles.map((r) => r.toLowerCase()).includes(userRole.toLowerCase())
  ) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default RoleBasedRoute;
