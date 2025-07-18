import api from "../../api/interceptor";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

// TODO: Integrate with redux (set profile)
export const getProfile = async () => {
  try {
    const response = await api.get(`${baseURL}/api/profile`);
    return response.data;
  } catch (error: unknown) {
    console.log("getPatientProfile failed:", error);
    throw new Error("Problem getting patient profile.");
  }
};
