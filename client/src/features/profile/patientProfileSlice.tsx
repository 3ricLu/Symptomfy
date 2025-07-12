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
    setID: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setGlobalRole: (state, action: PayloadAction<"patient">) => {
      state.global_role = action.payload;
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
    setSex: (state, action: PayloadAction<"Male" | "Female" | "N/A">) => {
      state.sex = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
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
  },
});

export const {
  setID,
  setGlobalRole,
  setFirstName,
  setLastName,
  setMiddleName,
  setSex,
  setAge,
  setAddress,
  setEmail,
  setPhone,
  setPicture,
} = patientProfileSlice.actions;

export default patientProfileSlice.reducer;
