import React from "react";
import Options from "./NavOptions.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-title-box">
        <h2 className="nav-title-content">
          <Link to="/">SAUTI DESIGN STUDIO</Link>
        </h2>
      </div>
      <div className="navbar-options">
        <Options />
      </div>
    </div>
  );
};

export default Navbar;
