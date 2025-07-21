import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AdminProfileState {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  permissions: string[];
}

const initialState: AdminProfileState = {
  id: "",
  firstName: "",
  lastName: "",
  picture: "",
  permissions: [],
};

export const adminProfileSlice = createSlice({
  name: "adminProfile",
  initialState,
  reducers: {
    setAdminProfile: (state, action: PayloadAction<Partial<AdminProfileState>>) => {
      Object.assign(state, action.payload);
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setPicture: (state, action: PayloadAction<string>) => {
      state.picture = action.payload;
    },
    setPermissions: (state, action: PayloadAction<string[]>) => {
      state.permissions = action.payload;
    },
  },
});

export const adminProfileActions = adminProfileSlice.actions;

export default adminProfileSlice.reducer;
