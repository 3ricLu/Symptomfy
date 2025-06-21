import axios from "axios";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post("/api/auth", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await axios.post("/api/user", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};
