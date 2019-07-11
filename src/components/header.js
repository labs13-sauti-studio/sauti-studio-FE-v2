import React from 'react';
import TopRightContainer from './TopRightContainer.js';

const Header = (props) => {
  return (
    <div className="AppHead">
      <div className="header1">
        <h2>SAUTI DESIGN STUDIO</h2>
      </div>
      <div className="header2">
        <TopRightContainer />
      </div>
    </div>
  )
}

export default Header;
