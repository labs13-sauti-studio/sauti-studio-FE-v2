import React from "react";

import { Link } from "react-router-dom";

const ProfileLoginOut = () => {
  return (
    <div className="navbar-links">
      <Link to="/contact">Contact</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default ProfileLoginOut;
