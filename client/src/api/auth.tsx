import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${baseURL}/api/user/auth`, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error: unknown) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const register = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const response = await axios.post(`${baseURL}/api/user`, {
      email: email,
      password: password,
      name: name,
    });
    return response.data;
  } catch (error: unknown) {
    console.error("Registration failed:", error);
    throw error;
  }
};
