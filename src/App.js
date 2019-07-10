import React from 'react';

import Home from './pages/home.js';
import Header from './components/header';
import Navbar from './components/navbar';
import Contact from './components/contactForm';
import Footer from './components/footer';


import './App.css';


function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <Navbar />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
