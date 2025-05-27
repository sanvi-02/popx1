import React from "react";
import "./LandingScreen.css"; // CSS is in the same folder
import { Link } from "react-router-dom";

const LandingScreen = () => {
  return (
    <>
      <div className="splash splash-purple top-left" />
      <div className="splash splash-blue bottom-right" />
      <div className="splash splash-purple bottom-left" />

      <div className="landing-container">
        <div className="landing-box">
          <h2 className="bounce-in">Welcome to PopX</h2>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>
          <button className="btn primary">
            <Link
              to="/signup"
              className="btn-signup"
              title="Create a new account on PopX">
              Create Account
            </Link>
          </button>

          <button className="btn secondary">
            <Link to="/loginPage" title="signin to exisiting account">
              Already Registered? Login
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingScreen;
