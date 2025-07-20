import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, refreshToken } from "./authAPI";
import { TOKEN, REFRESH_TOKEN } from "./AuthConstants";
import { jwtDecode } from "jwt-decode";

const checkTokenValidity = () => {
  const token = sessionStorage.getItem(TOKEN);
  if (!token) return false;

  try {
    const { exp }: { exp: number } = jwtDecode(token);
    return exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await login(credentials.email, credentials.password);
      console.log("Login response:", response);

      if (response["access-token"]) {
        sessionStorage.setItem(TOKEN, response["access-token"]);
        console.log("Saved access token to sessionStorage");
      }
      if (response["refresh-token"]) {
        sessionStorage.setItem(REFRESH_TOKEN, response["refresh-token"]);
        console.log("Saved refresh token to sessionStorage");
      }

      return response;
    } catch (error: unknown) {
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as {
          response?: { status?: number; data?: { message?: string } };
        };

        if (axiosError.response?.status === 401) {
          return rejectWithValue("Wrong email or password");
        }

        if (axiosError.response?.data?.message) {
          return rejectWithValue(axiosError.response.data.message);
        }
      }

      return rejectWithValue(
        "An error occurred during login. Please try again."
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    credentials: { email: string; password: string; name: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await register(
        credentials.email,
        credentials.password,
        credentials.name
      );

      if (response.access_token) {
        sessionStorage.setItem(TOKEN, response.access_token);
      }
      if (response.refresh_token) {
        sessionStorage.setItem(REFRESH_TOKEN, response.refresh_token);
      }

      return response;
    } catch (error: unknown) {
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as {
          response?: { status?: number; data?: { message?: string } };
        };

        if (axiosError.response?.status === 409) {
          return rejectWithValue("Email already registered");
        }

        if (axiosError.response?.status === 400) {
          return rejectWithValue(
            "Invalid registration data. Please check your information."
          );
        }

        if (axiosError.response?.data?.message) {
          return rejectWithValue(axiosError.response.data.message);
        }
      }

      return rejectWithValue(
        "An error occurred during registration. Please try again."
      );
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const refreshTokenValue = sessionStorage.getItem(REFRESH_TOKEN);

      if (!refreshTokenValue) {
        return rejectWithValue("No refresh token available");
      }

      // Check if refresh token is still valid
      try {
        const { exp }: { exp: number } = jwtDecode(refreshTokenValue);
        if (exp * 1000 <= Date.now()) {
          return rejectWithValue("Refresh token expired");
        }
      } catch {
        return rejectWithValue("Invalid refresh token");
      }

      const response = await refreshToken(refreshTokenValue);
      console.log("Refresh token response:", response);

      if (response["access-token"]) {
        sessionStorage.setItem(TOKEN, response["access-token"]);
        console.log("Saved new access token to sessionStorage");
      }
      if (response["refresh-token"]) {
        sessionStorage.setItem(REFRESH_TOKEN, response["refresh-token"]);
        console.log("Saved new refresh token to sessionStorage");
      }

      return response;
    } catch (error: unknown) {
      console.log(error);
      return rejectWithValue("Failed to refresh token");
    }
  }
);

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: AuthState = {
  isAuthenticated: checkTokenValidity(),
  isLoading: false,
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      sessionStorage.removeItem(TOKEN);
      sessionStorage.removeItem(REFRESH_TOKEN);
    },
    clearError: (state) => {
      state.errorMessage = "";
    },
    checkAuth: (state) => {
      // Re-check authentication status from sessionStorage
      state.isAuthenticated = checkTokenValidity();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.errorMessage = "";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.errorMessage = (action.payload as string) || "Login failed";
    });
    builder.addCase(registerUser.pending, (state) => {
      state.isAuthenticated = false;
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.errorMessage = "";
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.errorMessage = (action.payload as string) || "Registration failed";
    });
    builder.addCase(refreshAccessToken.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(refreshAccessToken.fulfilled, (state) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.errorMessage = "";
    });
    builder.addCase(refreshAccessToken.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.errorMessage = (action.payload as string) || "Token refresh failed";
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
