import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "./profileAPI";
import { patientProfileActions } from "./patientProfileSlice";
import { doctorProfileActions } from "./doctorProfileSlice";
import { adminProfileActions } from "./adminProfileSlice";

export const fetchAndSetUserProfile = createAsyncThunk(
  "profile/fetchAndSet",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const profileData = await getProfile();

      // Determine which profile to update based on the response
      if (profileData.patient_profile) {
        // User is a patient
        dispatch(
          patientProfileActions.setPatientProfile({
            id: profileData.id.toString(),
            global_role: "patient",
            firstName: profileData.first_name || "First Name",
            lastName: profileData.last_name || "Last Name",
            middleName: profileData.middle_name || "",
            sex: profileData.patient_profile.sex || "N/A",
            age: profileData.patient_profile.age || 0,
            address: profileData.patient_profile.address || "",
            email: profileData.email,
            phone: "", // Not in API response
            picture: "", // Not in API response
          })
        );
        return { role: "patient", data: profileData };
      } else if (profileData.doctor_profile) {
        // User is a doctor
        dispatch(
          doctorProfileActions.setDoctorProfile({
            id: profileData.id.toString(),
            global_role: "doctor",
            firstName: profileData.first_name || "First Name",
            lastName: profileData.last_name || "Last Name",
            middleName: profileData.middle_name || "",
            speciality: profileData.doctor_profile.specialization || "",
            email: profileData.email,
            phone: "", // Not in API response
            picture: "", // Not in API response
          })
        );
        return { role: "doctor", data: profileData };
      } else if (profileData.admin_profile) {
        // User is an admin
        dispatch(
          adminProfileActions.setAdminProfile({
            id: profileData.id.toString(),
            firstName: profileData.first_name || "First Name",
            lastName: profileData.last_name || "Last Name",
            picture: "", // Not in API response
            permissions: [], // Not in API response
          })
        );
        return { role: "admin", data: profileData };
      } else {
        // No profile type found
        return rejectWithValue("No valid profile type found");
      }
    } catch {
      return rejectWithValue("Failed to fetch profile");
    }
  }
);
