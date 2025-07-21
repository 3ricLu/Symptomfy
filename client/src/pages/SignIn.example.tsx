// Example of how to update SignIn.tsx to fetch profile after login

import { fetchAndSetUserProfile } from "../features/profile/profileThunks";

// In the handleSignInClick function, update it to:
const handleSignInClick = async () => {
  setError("");
  if (!isValidEmail(email)) {
    setError("Please enter a valid email.");
    return;
  }

  const result = await dispatch(loginUser({ email, password }));
  if (loginUser.fulfilled.match(result)) {
    // Fetch the user profile to determine their role
    const profileResult = await dispatch(fetchAndSetUserProfile());
    
    if (fetchAndSetUserProfile.fulfilled.match(profileResult)) {
      // Navigate based on the user's role
      const { role } = profileResult.payload as { role: string };
      switch (role) {
        case "patient":
          navigate("/patient");
          break;
        case "doctor":
          navigate("/doctor");
          break;
        case "admin":
          navigate("/admin");
          break;
        default:
          navigate("/home");
      }
    } else {
      // If profile fetch fails, navigate to home
      navigate("/home");
    }
  }
};

// Similarly for handleSignUpClick:
const handleSignUpClick = async () => {
  setError("");
  if (!registerName.trim()) {
    setError("Please enter your name.");
    return;
  }
  if (!isValidEmail(registerEmail)) {
    setError("Please enter a valid email.");
    return;
  }
  if (!isMatch) {
    setError("Passwords do not match.");
    return;
  }

  const result = await dispatch(
    registerUser({
      email: registerEmail,
      password: registerPassword,
      name: registerName,
    })
  );
  
  if (registerUser.fulfilled.match(result)) {
    // Fetch the user profile to determine their role
    const profileResult = await dispatch(fetchAndSetUserProfile());
    
    if (fetchAndSetUserProfile.fulfilled.match(profileResult)) {
      // Navigate based on the user's role
      const { role } = profileResult.payload as { role: string };
      switch (role) {
        case "patient":
          navigate("/patient");
          break;
        case "doctor":
          navigate("/doctor");
          break;
        case "admin":
          navigate("/admin");
          break;
        default:
          navigate("/home");
      }
    } else {
      // If profile fetch fails, navigate to home
      navigate("/home");
    }
  }
};