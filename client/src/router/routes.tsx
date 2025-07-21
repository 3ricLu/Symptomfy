import type { RouteObject } from "react-router-dom";
import RoleBasedRoute from "./RoleBasedRoute";
import ProtectedRoutes from "./ProtectedRoutes";
import RoleRedirect from "./RoleRedirect";

// Pages
import Home from "@/pages/Home";
import Booking from "@/pages/Booking";
import SignIn from "@/pages/SignIn";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/Profile";
import DiagnosisPage from "@/pages/DiagnosisPage";
import Diagnosed from "@/pages/Diagnosed";

// Patient-specific pages
const PatientDashboard = () => <div>Patient Dashboard - TODO</div>;
const PatientHistory = () => <div>Patient Medical History - TODO</div>;
const SymptomChecker = () => <div>Symptom Checker - TODO</div>;

// Doctor-specific pages
const DoctorDashboard = () => <div>Doctor Dashboard - TODO</div>;
const PatientList = () => <div>Patient List - TODO</div>;
const Appointments = () => <div>Appointments - TODO</div>;
const MedicalRecords = () => <div>Medical Records - TODO</div>;

// Admin-specific pages
const AdminDashboard = () => <div>Admin Dashboard - TODO</div>;
const UserManagement = () => <div>User Management - TODO</div>;
const SystemSettings = () => <div>System Settings - TODO</div>;
const Analytics = () => <div>Analytics - TODO</div>;

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <RoleRedirect />,
  },
];

export const patientRoutes: RouteObject[] = [
  {
    element: (
      <RoleBasedRoute
        allowedRoles={["patient", "Patient"]}
        redirectPath="/login"
      />
    ),
    children: [
      {
        path: "/patient",
        children: [
          {
            index: true,
            element: <PatientDashboard />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "diagnosis",
            element: <Diagnosed />,
          },
          {
            path: "diagnosed",
            element: <DiagnosisPage />,
          },
          {
            path: "booking",
            element: <Booking />,
          },
          {
            path: "history",
            element: <PatientHistory />,
          },
          {
            path: "symptoms",
            element: <SymptomChecker />,
          },
        ],
      },
    ],
  },
];

export const doctorRoutes: RouteObject[] = [
  {
    element: (
      <RoleBasedRoute
        allowedRoles={["doctor", "Doctor"]}
        redirectPath="/login"
      />
    ),
    children: [
      {
        path: "/doctor",
        children: [
          {
            index: true,
            element: <DoctorDashboard />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "patients",
            element: <PatientList />,
          },
          {
            path: "appointments",
            element: <Appointments />,
          },
          {
            path: "records",
            element: <MedicalRecords />,
          },
        ],
      },
    ],
  },
];

export const adminRoutes: RouteObject[] = [
  {
    element: (
      <RoleBasedRoute allowedRoles={["admin", "Admin"]} redirectPath="/login" />
    ),
    children: [
      {
        path: "/admin",
        children: [
          {
            index: true,
            element: <AdminDashboard />,
          },
          {
            path: "users",
            element: <UserManagement />,
          },
          {
            path: "settings",
            element: <SystemSettings />,
          },
          {
            path: "analytics",
            element: <Analytics />,
          },
        ],
      },
    ],
  },
];

// Legacy protected routes for backward compatibility
export const protectedRoutes: RouteObject[] = [
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/diagnosis",
        element: <Diagnosed />,
      },
      {
        path: "/diagnosed",
        element: <DiagnosisPage />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
];

export const allRoutes: RouteObject[] = [
  ...publicRoutes,
  ...patientRoutes,
  ...doctorRoutes,
  ...adminRoutes,
  ...protectedRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
];
