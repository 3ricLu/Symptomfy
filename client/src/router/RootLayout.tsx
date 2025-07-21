import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navigation from "@/common/Navigation";
import { authActions } from "@/features/auth/authSlice";
import type { AppDispatch } from "@/app/store";

const RootLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(authActions.checkAuth());
  }, [dispatch]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </div>
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;