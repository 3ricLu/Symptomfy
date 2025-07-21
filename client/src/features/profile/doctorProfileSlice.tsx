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
    setDoctorProfile: (state, action: PayloadAction<Partial<DoctorProfileState>>) => {
      Object.assign(state, action.payload);
    },
    setDoctorId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setDoctorFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setDoctorLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setDoctorMiddleName: (state, action: PayloadAction<string>) => {
      state.middleName = action.payload;
    },
    setDoctorEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setDoctorPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setDoctorPicture: (state, action: PayloadAction<string>) => {
      state.picture = action.payload;
    },
    setDoctorSpeciality: (state, action: PayloadAction<string>) => {
      state.speciality = action.payload;
    },
  },
});

export const doctorProfileActions = doctorProfileSlice.actions;

export default doctorProfileSlice.reducer;
