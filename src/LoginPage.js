import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField"; // optional, if you're using your reusable input
import "./LoginPage.css"; // optional CSS file

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const createAccount = () => {
    const { Email, Password } = formData;

    if (!Email || !Password) {
      alert("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (Password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    navigate("/ProfilePage");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-heading">
          Signin to your <br /> PopX account
        </h1>
        <div class="login-subheading">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit,
        </div>
        <div className="form-fields">
          <InputField
            name="Email"
            context="Email address"
            value={formData.Email}
            onChange={(val) => handleChange("Email", val)}
            abstract={true}
          />
          <InputField
            name="Password"
            context="Password"
            value={formData.Password}
            onChange={(val) => handleChange("Password", val)}
            abstract={true}
          />
        </div>
        <button className="login-button" onClick={createAccount}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
