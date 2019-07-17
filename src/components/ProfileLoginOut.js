import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

const ProfileLoginOut = () => {
  return (
    <div className="navbar-links">
      <Link to="/workflows">App Builder</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login Thingy!</Link>
    </div>
  );
};

export default ProfileLoginOut;
