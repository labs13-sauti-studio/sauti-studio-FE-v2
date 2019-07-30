import "../App.css";

import React, { Component } from 'react';
// import { Link } from "react-router-dom";

class ProfileOptions extends Component {
    constructor() {
      super();

      this.state = {
        showMenu: false,
        showMenu2:false
      }
      this.showMenu = this.showMenu.bind(this);
      this.showMenu2 = this.showMenu2.bind(this);
    }
    
    showMenu(event) {
      event.preventDefault();
      
      this.setState({
        showMenu: true,
      });
    }

    showMenu2(event) {
        event.preventDefault();
        
        this.setState({
          showMenu2: true,
        });
      }
  
    render() {
  return (
    <div className="navbar-options">
      <div onClick = {this.showMenu} >Help</div>
      <div onClick = {this.showMenu2} >Name</div>
      {
          this.state.showMenu
            ? (
              <div className="menu">
                <button> Help</button>
                <button> Help </button>
                
              </div>
            )
            : (
              null
            )
        }
              {
          this.state.showMenu2
            ? (
              <div className="menu2">
                <button> Logout </button>
              </div>
            )
            : (
              null
            )
        }
    </div>
  );
 }
};

export default ProfileOptions;