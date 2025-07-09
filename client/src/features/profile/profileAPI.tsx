import api from "../../api/interceptor";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const getPatientProfile = async () => {
  try {
    const response = await api.get(`${baseURL}/api/patient`);
    return response.data;
  } catch (error: unknown) {
    console.log("getPatientProfile failed:", error);
    throw new Error("Problem getting patient profile.");
  }
};

export const getDoctorProfile = async () => {
  try {
    const response = await api.get(`${baseURL}/api/doctor`);
    return response.data;
  } catch (error: unknown) {
    console.log("getDoctorProfile failed:", error);
    throw new Error("Problem getting doctor profile.");
  }
};

export const getAdminProfile = async () => {
  try {
    const response = await api.get(`${baseURL}/api/admin`);
    return response.data;
  } catch (error: unknown) {
    console.log("getAdminProfile failed:", error);
    throw new Error("Problem getting admin profile.");
  }
};
