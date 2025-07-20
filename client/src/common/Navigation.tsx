import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  ClipboardList,
  CalendarDays,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import logo_box from "../assets/images/logo_box.png";
import { useProfile } from "../context/ProfileContext";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../features/auth/authSlice";
import type { AppDispatch, RootState } from "../app/store";

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const { setProfile } = useProfile();
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authentication
  );

  const isLoggedIn = isAuthenticated;

  const handleLogout = () => {
    dispatch(authActions.logout());
    setProfile(null);
    navigate("/login");
    setMobileOpen(false);
  };

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex items-center gap-2 px-3 py-1 rounded-md font-medium transition-colors",
      isActive
        ? "bg-[#2541B2]/10 text-[#2541B2]"
        : "text-gray-700 hover:bg-gray-100"
    );

  return (
    <div className="w-full flex justify-center mt-6 relative">
      <nav
        className={cn(
          "bg-white/80 border border-gray-200 shadow-sm rounded-2xl px-8 py-2 flex items-center justify-between",
          "max-w-4xl w-full mx-4"
        )}
        style={{ backdropFilter: "blur(8px)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo_box} alt="Symptomfy Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 items-center gap-4 justify-center">
          <NavLink to="/home" className={linkClasses}>
            <Home size={18} /> Home
          </NavLink>
          {isLoggedIn && (
            <>
              <NavLink to="/diagnosis" className={linkClasses}>
                <ClipboardList size={18} /> Diagnosis
              </NavLink>
              <NavLink to="/booking" className={linkClasses}>
                <CalendarDays size={18} /> Bookings
              </NavLink>
              <NavLink to="/profile" className={linkClasses}>
                <User size={18} /> Profile
              </NavLink>
            </>
          )}
          {!isLoggedIn && (
            <NavLink to="/login" className={linkClasses}>
              <User size={18} /> Sign In
            </NavLink>
          )}
        </div>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-4">
          {/* Logout Button Desktop */}
          {isLoggedIn && (
            <div className="hidden md:block">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-[#EF476F] text-[#EF476F] hover:bg-[#EF476F]/10 hover:text-[#EF476F] px-3 py-1"
                onClick={handleLogout}
              >
                <LogOut size={18} /> Log Out
              </Button>
            </div>
          )}

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMobile}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 flex justify-center mt-2">
          <div
            className="bg-white/90 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl max-w-4xl w-full mx-4 p-4 flex flex-col gap-2"
            style={{ backdropFilter: "blur(8px)" }}
          >
            <NavLink to="/home" className={linkClasses} onClick={toggleMobile}>
              <Home size={18} /> Home
            </NavLink>
            {isLoggedIn && (
              <>
                <NavLink
                  to="/diagnosis"
                  className={linkClasses}
                  onClick={toggleMobile}
                >
                  <ClipboardList size={18} /> Diagnosis
                </NavLink>
                <NavLink
                  to="/booking"
                  className={linkClasses}
                  onClick={toggleMobile}
                >
                  <CalendarDays size={18} /> Bookings
                </NavLink>
                <NavLink
                  to="/profile"
                  className={linkClasses}
                  onClick={toggleMobile}
                >
                  <User size={18} /> Profile
                </NavLink>
              </>
            )}
            {!isLoggedIn && (
              <NavLink
                to="/login"
                className={linkClasses}
                onClick={toggleMobile}
              >
                <User size={18} /> Sign In
              </NavLink>
            )}
            {isLoggedIn && (
              <Button
                variant="outline"
                className="flex items-center gap-2 border-[#EF476F] text-[#EF476F] hover:bg-[#EF476F]/10 hover:text-[#EF476F] px-3 py-1 mt-2"
                onClick={handleLogout}
              >
                <LogOut size={18} /> Log Out
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
