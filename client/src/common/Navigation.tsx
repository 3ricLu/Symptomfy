import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, ClipboardList, CalendarDays, User, LogOut } from "lucide-react";
import logo from "../assets/images/logo.png";
import { useProfile } from "../context/ProfileContext";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils"; // shadcn utility, if you have it

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const { setProfile } = useProfile();

  const isLoggedIn = !!sessionStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("refreshToken");
    setProfile(null);
    navigate("/signin");
  };

  return (
    <div className="w-full flex justify-center mt-6">
      <nav
        className={cn(
          "bg-white/80 border border-gray-200 shadow-sm rounded-2xl px-8 py-2 flex items-center gap-8",
          "max-w-4xl w-full mx-4"
        )}
        style={{
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mr-8">
          <img src={logo} alt="Symptomfy Logo" className="h-10 w-auto" />
        </div>

        {/* Links */}
        <div className="flex-1 flex items-center gap-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 px-3 py-1 rounded-md font-medium transition-colors",
                isActive
                  ? "bg-[#2541B2]/10 text-[#2541B2]"
                  : "text-gray-700 hover:bg-gray-100"
              )
            }
          >
            <Home size={18} /> Home
          </NavLink>

          {isLoggedIn && (
            <>
              <NavLink
                to="/diagnosis"
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-3 py-1 rounded-md font-medium transition-colors",
                    isActive
                      ? "bg-[#2541B2]/10 text-[#2541B2]"
                      : "text-gray-700 hover:bg-gray-100"
                  )
                }
              >
                <ClipboardList size={18} /> Diagnosis
              </NavLink>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-3 py-1 rounded-md font-medium transition-colors",
                    isActive
                      ? "bg-[#2541B2]/10 text-[#2541B2]"
                      : "text-gray-700 hover:bg-gray-100"
                  )
                }
              >
                <CalendarDays size={18} /> Bookings
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-3 py-1 rounded-md font-medium transition-colors",
                    isActive
                      ? "bg-[#2541B2]/10 text-[#2541B2]"
                      : "text-gray-700 hover:bg-gray-100"
                  )
                }
              >
                <User size={18} /> Profile
              </NavLink>
            </>
          )}

          {!isLoggedIn && (
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 px-3 py-1 rounded-md font-medium transition-colors",
                  isActive
                    ? "bg-[#2541B2]/10 text-[#2541B2]"
                    : "text-gray-700 hover:bg-gray-100"
                )
              }
            >
              <User size={18} /> Sign In
            </NavLink>
          )}
        </div>

        {/* Logout Button */}
        {isLoggedIn && (
          <Button
            variant="outline"
            className="flex items-center gap-2 border-[#EF476F] text-[#EF476F] hover:bg-[#EF476F]/10 hover:text-[#EF476F] px-3 py-1"
            onClick={handleLogout}
          >
            <LogOut size={18} /> Log Out
          </Button>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
