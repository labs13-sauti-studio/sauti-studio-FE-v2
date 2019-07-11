import React from 'react';
import ProfileLoginOut from './ProfileLoginOut.js';
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="AppHead">
      <div className="header1">
        <h2 classname="navbar-title"><Link to="/">SAUTI DESIGN STUDIO</Link></h2>
      </div>
      <div className="header2">
        <ProfileLoginOut />
      </div>
    </div>
  )
}

export default Header;
