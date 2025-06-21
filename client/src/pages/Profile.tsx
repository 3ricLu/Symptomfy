import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const Profile: React.FC = () => {
  const [age, setAge] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [saving, setSaving] = useState<boolean>(false);

  // Fetch existing patient info
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      setError("Not authenticated");
      setLoading(false);
      return;
    }

    axios
      .get("/api/patient", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data;
        // assume data has { age?: string, sex?: string, address?: string }
        setAge(data.age || "");
        setSex(data.sex || "");
        setAddress(data.address || "");
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load profile");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSave = () => {
    setSaving(true);
    setError("");
    const token = sessionStorage.getItem("token");
    if (!token) {
      setError("Not authenticated");
      setSaving(false);
      return;
    }

    axios
      .post(
        "/api/patient",
        { age, sex, address },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        // optionally show a toast or confirmation
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to save profile");
      })
      .finally(() => setSaving(false));
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-[#1C2D5A] px-6 pt-20">
      <Card className="w-full max-w-md">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
          <Separator className="mb-6" />

          {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

          <div className="space-y-4">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="sex">Sex</Label>
              <Input
                id="sex"
                type="text"
                placeholder="Enter your sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <Button
              onClick={handleSave}
              className="w-full bg-[#2541B2] hover:bg-[#1C2D5A] text-white"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Profile"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
