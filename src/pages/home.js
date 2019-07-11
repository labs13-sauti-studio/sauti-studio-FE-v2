import React, { Component } from 'react';
import '../App.css';
import image1 from '../images/image1.svg';
import image2 from '../images/image2.svg';
import image3 from '../images/image3.svg';

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
                
                <div className="home1b">
                    <h1>Video Placeholder !</h1>

                </div>

                <div className="home1c">
                    <h1>Knowledge is Power - Sharing it is Powerful</h1>
                    <p>Sauti Studio & Design is an online tool that allows people without any programming background to build their own text-based apps.</p>
                    <p>In Sauti Studio & Design, We offer a simple and easy tool for anyone to create their own flow whether to promote a business or share essential information that can support their community. From bus schedules to a church event calendar, the weather or legal information. You can create any text-based app flow with our product.</p>
                    <p>Our mission is to allow anyone to design their own text-based applications, and share Knowledge that will strengthen the community. Providing a simple tool to create (develop and deploy) empowering solutions and quickly communicate ideas to address property.</p>
                </div>

                <div className="home1b">
                    <h1>TRY OUR DEMO! Placeholder !</h1>

                </div>

                <div className="home1b">
                    <img src={image3}></img>


                </div>
                
                

             </div>
        )
    }
}
  
export default Home;
