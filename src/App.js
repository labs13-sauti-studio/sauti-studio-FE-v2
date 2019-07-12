import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/error" component={Error} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
