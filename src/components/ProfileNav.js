import React from "react";
import { Link } from "react-router-dom";
import ProfileOptions from "./ProfileOptions.js";

const ProfileNav = () => {
  return (
    <div className="navbar">
      <div className="nav-title-box">
        <h2 className="nav-title-content">
          <Link to="/">SAUTI DESIGN STUDIO</Link>
        </h2>
      </div>
      <div className="nav-options">
        <ProfileOptions />
      </div>
    </div>
  );
};

export default ProfileNav;
