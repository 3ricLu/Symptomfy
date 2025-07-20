import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./authAPI";
import { TOKEN, REFRESH_TOKEN } from "./AuthConstants";

const token = sessionStorage.getItem(TOKEN);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await login(credentials.email, credentials.password);
      
      // Store tokens in sessionStorage
      if (response.access_token) {
        sessionStorage.setItem(TOKEN, response.access_token);
      }
      if (response.refresh_token) {
        sessionStorage.setItem(REFRESH_TOKEN, response.refresh_token);
      }
      
      return response;
    } catch (error: unknown) {
      // Handle error response from API
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as { response?: { status?: number; data?: { message?: string } } };
        
        if (axiosError.response?.status === 401) {
          return rejectWithValue("Wrong email or password");
        }
        
        if (axiosError.response?.data?.message) {
          return rejectWithValue(axiosError.response.data.message);
        }
      }
      
      return rejectWithValue("An error occurred during login. Please try again.");
    }
  }
);

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: AuthState = {
  isAuthenticated: Boolean(token),
  isLoading: false,
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      sessionStorage.removeItem(TOKEN);
      sessionStorage.removeItem(REFRESH_TOKEN);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isAuthenticated = false;
      state.isLoading = true;
      state.errorMessage = "";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.errorMessage = "";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.errorMessage = action.payload as string || "Login failed";
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
