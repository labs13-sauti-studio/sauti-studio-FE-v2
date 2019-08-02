import React from "react";
import ProfileLoginOut from "./ProfileLoginOut.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-title-box">
        <h2 className="nav-title-content">
          <Link to="/">SAUTI DESIGN STUDIO</Link>
        </h2>
      </div>
      <div className="nav-options">
        <ProfileLoginOut />
      </div>
    </div>
  );
};

export default Navbar;
