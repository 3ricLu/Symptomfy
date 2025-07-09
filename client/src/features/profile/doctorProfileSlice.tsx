import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DoctorProfileState {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  speciality: string;
  clinics: string[];
}

const initialState: DoctorProfileState = {
  id: "",
  firstName: "",
  lastName: "",
  picture: "",
  speciality: "",
  clinics: [],
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
    setPicture: (state, action: PayloadAction<string>) => {
      state.picture = action.payload;
    },
    setSpeciality: (state, action: PayloadAction<string>) => {
      state.speciality = action.payload;
    },
    setClinics: (state, action: PayloadAction<string[]>) => {
      state.clinics = action.payload;
    },
  },
});

export const {
  setId,
  setFirstName,
  setLastName,
  setPicture,
  setSpeciality,
  setClinics,
} = doctorProfileSlice.actions;

export default doctorProfileSlice.reducer;
