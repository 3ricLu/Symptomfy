import { createSlice } from "@reduxjs/toolkit";
import { TOKEN, REFRESH_TOKEN } from "./AuthConstants";

const token = sessionStorage.getItem("token");

export interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: Boolean(token),
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
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
