import React, { Component } from 'react';
import '../App.css';


import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  withRouter
} from "react-router-dom";



class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            

            }
        }

    render(){

        console.log(this.props.reviewsey);

        return(
            <div className="home1b">
                <h1> Login Page Thing </h1>
            </div>
        )
    }
}
  
export default LoginPage;