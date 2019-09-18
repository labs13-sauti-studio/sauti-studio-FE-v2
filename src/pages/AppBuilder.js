import React from "react";

import Navbar from "../components/Navbar";
import ProjectSpace from "../components/Canvas/main.js";

const AppBuilder = props => {
  return (
    <div className="app-builder-container">
      <Navbar />
      <ProjectSpace props={props}/>
    </div>
  );
};

export default AppBuilder;
