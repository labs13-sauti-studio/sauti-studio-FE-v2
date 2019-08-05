import React, { Component } from 'react';
// import { Link } from "react-router-dom";

class ProfileOptions extends Component {
    constructor() {
      super();

      this.state = {}

    }
    
  
    render() {
  return (
    <div className="navbar-options">
      <div onClick = {this.showMenu} >Help</div>
      <div onClick = {this.showMenu2} >Name</div>
    </div>
  );
 }
};

export default ProfileOptions;
