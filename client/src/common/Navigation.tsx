import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, ClipboardList, CalendarDays, LogIn, LogOut } from "lucide-react";

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // or clear just the auth token
    navigate("/signin");
  };

  return (
    <nav className="bg-[#1C2D5A] text-white shadow-md h-16 flex items-center px-6">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide text-white">
          Symptomfy
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-[#00B4D8] transition ${
                isActive ? "text-[#00B4D8]" : "text-white"
              }`
            }
          >
            <Home size={18} /> Home
          </NavLink>

          <NavLink
            to="/diagnosis"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-[#00B4D8] transition ${
                isActive ? "text-[#00B4D8]" : "text-white"
              }`
            }
          >
            <ClipboardList size={18} /> Diagnosis
          </NavLink>

          <NavLink
            to="/booking"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-[#00B4D8] transition ${
                isActive ? "text-[#00B4D8]" : "text-white"
              }`
            }
          >
            <CalendarDays size={18} /> Bookings
          </NavLink>

          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-[#00B4D8] transition ${
                isActive ? "text-[#00B4D8]" : "text-white"
              }`
            }
          >
            <LogIn size={18} /> Sign In
          </NavLink>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-[#EF476F] hover:bg-[#d73e61] px-3 py-1 rounded text-white text-sm font-medium transition"
          >
            <LogOut size={18} /> Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
