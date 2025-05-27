import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import "./SignUpPage.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const createAccount = () => {
    const { fullname, phone, email, password, company, isAgency } = formData;

    if (!fullname || !phone || !email || !password || !company || !isAgency) {
      alert("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    navigate("/ProfilePage");
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1 className="signup-heading">
          Create your <br /> PopX account
        </h1>

        <div className="form-fields">
          <InputField
            name="fullname"
            context="Full Name"
            abstract={true}
            value={formData.fullname}
            onChange={(val) => handleChange("fullname", val)}
          />
          <InputField
            name="phone"
            context="Phone number"
            abstract={true}
            value={formData.phone}
            onChange={(val) => handleChange("phone", val)}
          />
          <InputField
            name="email"
            context="Email address"
            abstract={true}
            value={formData.email}
            onChange={(val) => handleChange("email", val)}
          />
          <InputField
            name="password"
            context="Password"
            abstract={true}
            value={formData.password}
            onChange={(val) => handleChange("password", val)}
          />
          <InputField
            name="company"
            context="Company name"
            abstract={false}
            value={formData.company}
            onChange={(val) => handleChange("company", val)}
          />

          <div className="agency-section">
            <p className="agency-label">
              Are you an Agency <span className="required">*</span>
            </p>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={(e) => handleChange("isAgency", e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={(e) => handleChange("isAgency", e.target.value)}
                />
                No
              </label>
            </div>
          </div>
        </div>

        <button className="create-button" onClick={createAccount}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
