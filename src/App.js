import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingScreen from "./LandingScreen";
import Signup from "./Signup";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
    </Routes>
  );
}
