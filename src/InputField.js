import React from "react";
import "./InputField.css"; // optional, you can style here

const InputField = ({ name, context, value, onChange, abstract }) => {
  return (
    <div className="input-field-container">
      <label htmlFor={name} className="input-label">
        {context} {abstract && <span className="required">*</span>}
      </label>
      <input
        type={name === "password" ? "password" : "text"}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field"
        placeholder={`Enter your ${context.toLowerCase()}`}
      />
    </div>
  );
};

export default InputField;
