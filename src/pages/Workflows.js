import React from 'react';

import Project from '../components/Project';

import Trashcan from '../images/icons/trash.png';
import DocSettings from '../images/icons/docSettings.png';
import Gear from '../images/icons/gear.png';
import Lock from '../images/icons/lock.png';
import PaintBucket from '../images/icons/paintBucket.png';
import Plus from '../images/icons/plus.png';
import Redo from '../images/icons/redo.png';
import Undo from '../images/icons/undo.png';
import ZoomIn from '../images/icons/zoomIn.png';
import ZoomOut from '../images/icons/zoomOut.png';

import Paper from '../components/Canvas.js';

const sidebar = [
  {
    id: 1,
    title: "Tutorials",
    backgroundImage: ''
  },
  {
    id: 2,
    title: "Templates",
    backgroundImage: ''
  },
  {
    id: 3,
    title: "Contact Us",
    backgroundImage: ''
  }
]

const AppBuilder = (props) => {
  return (
    <div className="profile-page-container">
      
      <section className="title-taskbar-canvas">

        <section className="title-test-save-export">
          <h1>Project Title</h1>
          <div className="test-save-export">
            <button>Test</button>
            <button>Save</button>
            <button>Export</button>
          </div>
        </section>

        <section className="taskbar">
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
              {/* <p className="zoom-percent-number">90%</p> */}
            </div>
            <div className="taskbar-section">
              <img src={DocSettings} alt="alt text" />
            </div>
          </div>
        </section>

        <Paper />

      </section>
    </div>
  )
}

export default AppBuilder;
