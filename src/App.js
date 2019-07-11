import React from 'react';

import Home from './pages/home.js';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/ContactForm';
import Footer from './components/Footer';


import './App.css';


function App() {
  return (
    <div className="App">
      
      <Header />
      
      <Home />
      <Navbar />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
