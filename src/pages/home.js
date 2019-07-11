import React, { Component } from 'react';
import '../App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  withRouter
} from "react-router-dom";



class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            

            }
        }

    render(){

        console.log(this.props.reviewsey);

        return(
            <div>
                <div className="home1">
                    <h1>I is a Home component</h1> 
                </div>
                
                
                

             </div>
        )
    }
}
  
export default Home;
