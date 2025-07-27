import axios from "axios";
import { TOKEN, REFRESH_TOKEN } from "../features/auth/AuthConstants";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
const api = axios.create({ baseURL });

const handleError = (error: unknown): Promise<never> => {
  import("../app/store").then((module) => {
    import("../features/auth/authSlice").then((authModule) => {
      module.default.dispatch(authModule.authActions.logout());
    });
  });
  window.location.href = "/login";
  return Promise.reject(error);
};

api.interceptors.request.use(
  (request) => {
    const token = sessionStorage.getItem(TOKEN);

    if (token) {
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
    console.log("test");

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = sessionStorage.getItem(REFRESH_TOKEN);

      if (!refreshToken) {
        return handleError(error);
      }

      try {
        const response = await axios.post(
          `${baseURL}/api/user/refresh`,
          {
            refreshToken,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const newAccessToken = response.data[TOKEN];
        sessionStorage.setItem(TOKEN, newAccessToken);

        import("../app/store").then((module) => {
          import("../features/auth/authSlice").then((authModule) => {
            module.default.dispatch(authModule.authActions.login());
          });
        });
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
