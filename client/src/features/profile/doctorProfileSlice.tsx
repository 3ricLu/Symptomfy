import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DoctorProfileState {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  speciality: string;
}

const initialState: DoctorProfileState = {
  id: "",
  firstName: "",
  lastName: "",
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
    setPicture: (state, action: PayloadAction<string>) => {
      state.picture = action.payload;
    },
    setSpeciality: (state, action: PayloadAction<string>) => {
      state.speciality = action.payload;
    },
  },
});

export const { setId, setFirstName, setLastName, setPicture, setSpeciality } =
  doctorProfileSlice.actions;

export default doctorProfileSlice.reducer;
