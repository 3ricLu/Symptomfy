import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, refreshAccessToken } from "../features/auth/authSlice";
import type { AppDispatch, RootState } from "../app/store";
import { TOKEN, REFRESH_TOKEN } from "../features/auth/AuthConstants";
import { jwtDecode } from "jwt-decode";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isMatch, setIsMatch] = useState(true);
  const [error, setError] = useState("");

  const isValidEmail = (e: string) => e.includes("@");

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, errorMessage } = useSelector(
    (state: RootState) => state.authentication
  );

  // Auto-redirect logic for users with valid tokens
  useEffect(() => {
    const checkAndRedirect = async () => {
      const token = sessionStorage.getItem(TOKEN);
      const refreshTokenValue = sessionStorage.getItem(REFRESH_TOKEN);
      
      // Check if access token exists and is valid
      if (token) {
        try {
          const { exp }: { exp: number } = jwtDecode(token);
          if (exp * 1000 > Date.now()) {
            // Token is still valid, redirect to home
            navigate("/home");
            return;
          }
        } catch (error) {
          console.error("Invalid access token:", error);
        }
      }
      
      // If access token is invalid/expired, try refresh token
      if (refreshTokenValue) {
        try {
          const { exp }: { exp: number } = jwtDecode(refreshTokenValue);
          if (exp * 1000 > Date.now()) {
            // Refresh token is valid, get new access token
            const result = await dispatch(refreshAccessToken());
            if (refreshAccessToken.fulfilled.match(result)) {
              navigate("/home");
            }
          }
        } catch (error) {
          console.error("Invalid refresh token:", error);
        }
      }
    };
    
    checkAndRedirect();
  }, [dispatch, navigate]);

  useEffect(() => {
    setIsMatch(registerPassword === confirmPassword || confirmPassword === "");
  }, [registerPassword, confirmPassword]);

  const handleSignInClick = async () => {
    setError("");
    if (!isValidEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    const result = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(result)) {
      navigate("/home");
    }
  };

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
      navigate("/home");
    }
  };

  const resetError = () => {
    setError("");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white text-[#1C2D5A] px-4">
      <div className="w-full max-w-md">
        <Tabs
          defaultValue="signin"
          className="w-full"
          onValueChange={resetError}
        >
          <TabsList className="grid w-full grid-cols-2 bg-[#E9ECF5] mb-6">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Create Account</TabsTrigger>
          </TabsList>

          {/* Sign In */}
          <TabsContent value="signin">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {(error || errorMessage) && (
                <p className="text-sm text-red-600">{error || errorMessage}</p>
              )}
              <Button
                className="w-full bg-[#2541B2] hover:bg-[#1C2D5A] text-white"
                onClick={handleSignInClick}
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </div>
          </TabsContent>

          {/* Sign Up */}
          <TabsContent value="signup">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-email">Email</Label>
                <Input
                  id="new-email"
                  type="email"
                  placeholder="you@example.com"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="Create a password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {!isMatch && (
                  <p className="text-sm text-red-600">
                    Passwords do not match.
                  </p>
                )}
              </div>
              {(error || errorMessage) && (
                <p className="text-sm text-red-600">{error || errorMessage}</p>
              )}
              <Button
                disabled={
                  !registerName ||
                  !isMatch ||
                  !registerPassword ||
                  !confirmPassword ||
                  !registerEmail ||
                  isLoading
                }
                className="w-full bg-[#2541B2] hover:bg-[#1C2D5A] text-white disabled:opacity-50"
                onClick={handleSignUpClick}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SignIn;
