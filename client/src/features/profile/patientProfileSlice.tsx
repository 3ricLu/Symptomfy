import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PatientProfileState {
  id: string;
  firstName: string;
  lastName: string;
  sex: "Male" | "Female" | "N/A";
  age: number;
  picture: string;
}

const initialState: PatientProfileState = {
  id: "N/A",
  firstName: "First Name",
  lastName: "Last Name",
  sex: "N/A",
  age: 0,
  picture: "",
};

export const patientProfileSlice = createSlice({
  name: "patientProfile",
  initialState,
  reducers: {
    setID: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setSex: (state, action: PayloadAction<"Male" | "Female" | "N/A">) => {
      state.sex = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setPicture: (state, action: PayloadAction<string>) => {
      state.picture = action.payload;
    },
  },
});

export const { setID, setFirstName, setLastName, setSex, setAge, setPicture } =
  patientProfileSlice.actions;
export default patientProfileSlice.reducer;
