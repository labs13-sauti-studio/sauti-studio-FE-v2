import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';

import Home from './pages/home.js';
import Header from './components/header';
import Navbar from './components/navbar';
import Contact from './components/contactForm';
import Footer from './components/footer';
import Login from './pages/login';

import './App.css';


function App() {
  return (
    <div>

      <div className="App">
        
        <Header />
        
        <div>
        
        <Route exact path="/" component={Home} />
        
        <Route path="/login" component={Login} />

        {/* <Router path="/register" component={Register} /> */}

      </div>
        
        <Footer />
        
      </div>
      
    
    </div>
  );
}

export default App;
