import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DoctorProfileState {
  id: string;
  global_role: "doctor";
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  phone: string;
  picture: string;
  speciality: string;
}

const initialState: DoctorProfileState = {
  id: "N/A",
  global_role: "doctor",
  firstName: "First Name",
  lastName: "Last Name",
  middleName: "",
  email: "",
  phone: "",
  picture: "",
  speciality: "",
};

export const doctorProfileSlice = createSlice({
  name: "doctorProfile",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setMiddleName: (state, action: PayloadAction<string>) => {
      state.middleName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPicture: (state, action: PayloadAction<string>) => {
      state.picture = action.payload;
    },
    setSpeciality: (state, action: PayloadAction<string>) => {
      state.speciality = action.payload;
    },
  },
});

export const {
  setId,
  setFirstName,
  setLastName,
  setMiddleName,
  setEmail,
  setPhone,
  setPicture,
  setSpeciality,
} = doctorProfileSlice.actions;

export default doctorProfileSlice.reducer;
