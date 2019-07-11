import React, { Component } from 'react';
import '../App.css';

import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const TopRightContainer = () => {
    return (
            <div>
                <Link to="/profile">Profile</Link>
                <Link to="/login">Login Thingy!</Link>
            </div>
        )
}
  
export default TopRightContainer;
