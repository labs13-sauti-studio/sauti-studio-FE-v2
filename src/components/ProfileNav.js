import React from "react";
import { Link } from "react-router-dom";
import ProfileOptions from "./ProfileOptions.js";

const ProfileNav = () => {
  return (
    <div className="AppHead">
      <div className="header1">
        <h2 className="header-title">
          <Link to="/">SAUTI DESIGN STUDIO</Link>
        </h2>
      </div>
      <div className="header2">
        <ProfileOptions />
      </div>
    </div>
  );
};

export default ProfileNav;