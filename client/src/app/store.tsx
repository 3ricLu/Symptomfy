import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import patientProfileReducer from "../features/profile/patientProfileSlice";
import doctorProfileReducer from "../features/profile/doctorProfileSlice";
import adminProfileReducer from "../features/profile/adminProfileSlice";

const store = configureStore({
  reducer: {
    authentication: authReducer,
    patientProfile: patientProfileReducer,
    doctorProfile: doctorProfileReducer,
    adminProfile: adminProfileReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
