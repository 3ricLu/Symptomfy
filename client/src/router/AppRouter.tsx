import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import DiagnosisPage from "../pages/DiagnosisPage";

import Navigation from "../common/Navigation";
import Diagnosed from "../pages/Diagnosed";
import { authActions } from "../features/auth/authSlice";
import type { AppDispatch } from "../app/store";

const AppContent = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(authActions.checkAuth());
  }, [dispatch]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/diagnosis" element={<Diagnosed />} />
          <Route path="/diagnosed" element={<DiagnosisPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default AppRouter;
