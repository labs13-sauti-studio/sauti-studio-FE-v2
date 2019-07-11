import React, { Component } from 'react';
import '../App.css';


import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  withRouter
} from "react-router-dom";



class TopRightContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            

            }
        }

    render(){

        console.log(this.props.reviewsey);

        return(
            <div>
                <Link to="/login">Login Thingy!</Link>
            </div>
        )
    }
}
  
export default TopRightContainer;
