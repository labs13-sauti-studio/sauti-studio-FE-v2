import React, { Component } from 'react';
import '../App.css';
import image1 from '../images/image1.svg';
import image2 from '../images/image2.svg';

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

                <div className="home1a">
                    <div className="homeleft">
                        <img src={image1}></img>
                    </div>

                    <div className="homeleft">
                        <h1>Sharing information made simple & easy with Sauti Design Studio</h1>
                        <button>STAR A NEW FLOW</button>
                    </div>
                    
                </div>

                <div className="home1a">
                    
                    <div className="homesub">
                        <p>No programming background needed</p>
                        <br></br>
                        <p>Create, Update, save & delete flows</p>
                        <br></br>
                        <p>Simple & intuitive visual</p>
                        <br></br>
                        <p>Cloud-based tool</p>
                        <br></br>
                        <p>Click through mockup view</p>
                        <br></br>
                        <p>Simple and Easy</p>
                        <br></br>
                        <p>No Code Required</p>
                    </div>

                    <div className="homeleft">
                        <img src={image2}></img>
                    </div>
                    
                </div>
                
                
                

             </div>
        )
    }
}
  
export default Home;
