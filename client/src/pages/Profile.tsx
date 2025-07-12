import React, { useState, useEffect } from "react";

import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ChevronDown } from "lucide-react";
import { useProfile } from "../context/ProfileContext";
import api from "../api/interceptor";
import { TOKEN } from "../features/auth/AuthConstants";

const Profile: React.FC = () => {
  const { profile, setProfile } = useProfile();
  const [age, setAge] = useState<string>(profile?.age ?? "");
  const [sex, setSex] = useState<string>(profile?.sex ?? "");
  const [address, setAddress] = useState<string>(profile?.address ?? "");
  const [doctor, setDoctor] = useState<string>(profile?.familyDoctor ?? "");
  const [loading, setLoading] = useState<boolean>(!profile);
  const [error, setError] = useState<string>("");
  const [saving, setSaving] = useState<boolean>(false);

  // Base URL for API
  const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  // Fetch existing patient info if not in context
  useEffect(() => {
    console.log(profile, "Profile context data");
    if (profile) {
      setAge(profile.age ?? "");
      setSex(profile.sex ?? "");
      setAddress(profile.address ?? "");
      setDoctor(profile.familyDoctor ?? "");
      setLoading(false);
      return;
    }

    const token = sessionStorage.getItem(TOKEN);
    if (!token) {
      setError("Not authenticated");
      setLoading(false);
      return;
    }

    api
      .get(`${baseURL}/api/patient`, {
        headers: { "Content-Type": "application/json", "access-token": token },
      })
      .then((res) => {
        const data = res.data;
        setProfile(data);
        setAge(data.age ?? "");
        setSex(data.sex ?? "");
        setAddress(data.address ?? "");
        setDoctor(data.familyDoctor ?? "");
      })
      .catch((err) => {
        console.error("Error loading profile:", err);
        setError("Failed to load profile");
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, [baseURL, setProfile]);

  // Save updated info
  const handleSave = () => {
    setSaving(true);
    setError("");
    const token = sessionStorage.getItem("token");
    if (!token) {
      setError("Not authenticated");
      setSaving(false);
      return;
    }

    const updatedProfile = { age, sex, address, familyDoctor: doctor };

    api
      .put(`${baseURL}/api/patient`, updatedProfile, {
        headers: { "access-token": token },
      })
      .then(() => {
        setProfile(updatedProfile);
      })
      .catch((err) => {
        console.error("Error saving profile:", err);
        setError("Failed to save profile");
      })
      .finally(() => setSaving(false));
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-[#1C2D5A] px-6 pt-20">
      <Card className="w-full max-w-md mt-32">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
          <Separator className="mb-6" />

          {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

          <div className="space-y-4">
            {/* Age Field */}
            <div>
              <Label htmlFor="age" className="block mb-2">
                Age
              </Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            {/* Sex Field */}
            <div>
              <Label htmlFor="sex" className="block mb-2">
                Sex
              </Label>
              <div className="relative">
                <select
                  id="sex"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-[#2541B2] focus:ring-[#2541B2] focus:outline-none"
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
                  size={20}
                />
              </div>
            </div>

            {/* Address Field */}
            <div>
              <Label htmlFor="address" className="block mb-2">
                Address
              </Label>
              <Input
                id="address"
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Family Doctor Field */}
            <div>
              <Label htmlFor="doctor" className="block mb-2">
                Family Doctor
              </Label>
              <Input
                id="doctor"
                type="text"
                placeholder="Enter your family doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              />
            </div>

            {/* Save Button */}
            <Button
              onClick={handleSave}
              className="w-full bg-[#2541B2] hover:bg-[#1C2D5A] text-white"
              disabled={saving}
            >
              {saving ? "Saving…" : "Save Profile"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
