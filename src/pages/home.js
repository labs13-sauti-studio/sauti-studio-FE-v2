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
                    <div className="textbig">
                        <h1>Design Your Own Text-Based Flow</h1>
                    </div>
                    
                </div>
                
                
                

             </div>
        )
    }
}
  
export default Home;
