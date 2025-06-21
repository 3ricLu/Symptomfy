import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${baseURL}/api/auth`, {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${baseURL}/api/user`, {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    console.error("Registration failed:", error);
    throw error;
  }
};
