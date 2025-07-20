import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PatientProfileState {
  id: string;
  global_role: "patient";
  firstName: string;
  lastName: string;
  middleName: string;
  sex: "Male" | "Female" | "N/A";
  age: number;
  address: string;
  email: string;
  phone: string;
  picture: string;
}

const initialState: PatientProfileState = {
  id: "N/A",
  global_role: "patient",
  firstName: "First Name",
  lastName: "Last Name",
  middleName: "",
  sex: "N/A",
  age: 0,
  address: "",
  email: "",
  phone: "",
  picture: "",
};

export const patientProfileSlice = createSlice({
  name: "patientProfile",
  initialState,
  reducers: {
    setPatientProfile: (state, action: PayloadAction<string>) => {
      Object.assign(state, action.payload);
    },
    setPatientID: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setPatientGlobalRole: (state, action: PayloadAction<"patient">) => {
      state.global_role = action.payload;
    },
    setPatientFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setPatientLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setPatientMiddleName: (state, action: PayloadAction<string>) => {
      state.middleName = action.payload;
    },
    setPatientSex: (
      state,
      action: PayloadAction<"Male" | "Female" | "N/A">
    ) => {
      state.sex = action.payload;
    },
    setPatientAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setPatientAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setPatientEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPatientPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPatientPicture: (state, action: PayloadAction<string>) => {
      state.picture = action.payload;
    },
  },
});

export const patientProfileActions = patientProfileSlice.actions;

export default patientProfileSlice.reducer;
