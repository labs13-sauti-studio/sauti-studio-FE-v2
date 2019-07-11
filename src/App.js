import React from "react"
import { Route } from "react-router-dom"

import Home from "./pages/home.js"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./pages/login"
import Profile from "./pages/profile"

import "./App.css"

import "./App.css"

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          {/* <Router path="/register" component={Register} /> */}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
