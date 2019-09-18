import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Profile from "./pages/Profile";
import AppBuilder from "./pages/AppBuilder.js";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/workflows" component={AppBuilder}/>
      <Route path="/login" component={Login} />
      <Route path="/error" component={Error} />
    </div>
  );
}

export default App;
