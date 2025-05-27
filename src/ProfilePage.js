import React from "react";
import "./ProfilePage.css";

// Optional: Uncomment and add your own profile image if you want
import dummy from "./dummy.png";

const ProfilePage = () => {
  const email = localStorage.getItem("email") || "Marry@gmail.com";
  const name = localStorage.getItem("name") || "Marry";

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Account Settings</h1>
      </div>

      <div className="profile-main">
        <div className="profile-image-container">

          <img src={dummy} alt="Profile" className="profile-image" />

          {/* Bootstrap icon for camera
          {/* <i
            className="bi bi-camera camera-icon"
            style={{ fontSize: "48px" }}></i> */}
        </div>
        <div className="profile-info">
          <p className="profile-name">
            <strong>{name}</strong>
          </p>
          <p className="profile-email">{email}</p>
        </div>
      </div>

      <p className="profile-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias expedita
        maiores corrupti molestias explicabo, eos, corporis sunt minima
        reprehenderit quaerat fugit at! Dolore fugit iste expedita, eos impedit
        modi consequuntur.
      </p>
    </div>
  );
};

export default ProfilePage;
