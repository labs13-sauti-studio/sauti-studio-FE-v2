import React from "react";
import "../sass/index.css";

import ProfileNav from "../components/ProfileNav";
import CustomExample from "../components/Canvas/main.js";

const AppBuilder = props => {
  return (
    <div className="app-builder-container">
      <ProfileNav />
      <CustomExample props={props}/>
    </div>
  );
};

export default AppBuilder;
