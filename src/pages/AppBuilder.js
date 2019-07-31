import React from 'react';

// import Project from '../components/Project';

// import Trashcan from '../images/icons/trash.png';
// import DocSettings from '../images/icons/docSettings.png';
// import Gear from '../images/icons/gear.png';
// import Lock from '../images/icons/lock.png';
// import PaintBucket from '../images/icons/paintBucket.png';
// import Plus from '../images/icons/plus.png';
// import Redo from '../images/icons/redo.png';
// import Undo from '../images/icons/undo.png';
// import ZoomIn from '../images/icons/zoomIn.png';
// import ZoomOut from '../images/icons/zoomOut.png';
// import Paper from '../components/Canvas/Canvas.js';
import ProfileNav from '../components/ProfileNav';
import CustomExample from '../components/Canvas/main.js';

const AppBuilder = (props) => {
  return (
    <div className="app-builder-container">
      <ProfileNav/>

      <div className="profile-page-container">
        
        <section className="title-taskbar-canvas">

        <CustomExample/>
        </section>
      </div>
    </div>

  )
}

export default AppBuilder;


{/* <section className="taskbar">
          <div className="tasktest">
            <div className="taskbar-section">
              <img src={Plus} alt="alt text" />
            </div>
            <div className="taskbar-section">
              <img src={Undo} alt="alt text" />
              <img src={Redo} alt="alt text" />
            </div>
            <div className="taskbar-section">
              <img src={PaintBucket} alt="alt text" />
              <img src={Lock} alt="alt text" />
              <img src={Gear} alt="alt text" />
            </div>
            <div className="taskbar-section">
              <img src={Trashcan} alt="alt text" />
            </div>
          </div>
          
          <div className="tasktest">
            <div className="taskbar-section">
              <img src={ZoomOut} alt="alt text" />
              <img src={ZoomIn} alt="alt text" />
            </div>
            <div className="taskbar-section">
              <img src={DocSettings} alt="alt text" />
            </div>
          </div>
        </section> 

        <Paper /> */}