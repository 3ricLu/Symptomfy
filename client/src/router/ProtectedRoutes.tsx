import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const ProtectedRoutes = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="login" />;
};
export default ProtectedRoutes;
