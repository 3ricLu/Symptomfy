import axios from "axios";
import store from "../../app/store";
import { logout, login } from "./authSlice";
import { TOKEN, REFRESH_TOKEN } from "./AuthConstants";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
const api = axios.create({ baseURL });

const handleError = (error: unknown): Promise<never> => {
  store.dispatch(logout());
  window.location.href = "/login";
  return Promise.reject(error);
};

api.interceptors.request.use(
  (request) => {
    const token = sessionStorage.getItem(TOKEN);
    if (token) {
      request.headers = request.headers || {};
      request.headers.Authorization = token;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest);

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = sessionStorage.getItem(REFRESH_TOKEN);

      if (!refreshToken) {
        handleError(error);
      }

      try {
        const response = await axios.post(`${baseURL}/api/user/refresh`, {
          headers: {
            "Content-Type": "application/json",
          },
          refreshToken,
        });

        const newAccessToken = response.data[TOKEN];
        sessionStorage.setItem(TOKEN, newAccessToken);

        store.dispatch(login());
        api.defaults.headers.common[TOKEN] = newAccessToken;
        originalRequest.headers![TOKEN] = newAccessToken;

        return api(originalRequest);
      } catch (refreshError) {
        handleError(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
