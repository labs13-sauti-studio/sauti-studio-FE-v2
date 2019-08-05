import * as React from "react";
import {Fragment} from "react";
import Trashcan from "../../images/icons/trash.png";
import DocSettings from "../../images/icons/docSettings.png";
import Gear from "../../images/icons/gear.png";
import Lock from "../../images/icons/lock.png";
import PaintBucket from "../../images/icons/paintBucket.png";
import Plus from "../../images/icons/plus.png";
import Redo from "../../images/icons/redo.png";
import Undo from "../../images/icons/undo.png";
import ZoomIn from "../../images/icons/zoomIn.png";
import ZoomOut from "../../images/icons/zoomOut.png";

import createEngine, {
  DiagramModel,
  DefaultNodeFactory,
  DefaultLinkFactory
} from "@projectstorm/react-diagrams";
import { JSCustomNodeFactory } from "./custom-node-js/JSCustomNodeFactory";
import { JSCustomNodeModel } from "./custom-node-js/JSCustomNodeModel";
import { BodyWidget } from "./BodyWidget";

// create an instance of the engine
const engine = createEngine();

// register the two engines
engine.getNodeFactories().registerFactory(new JSCustomNodeFactory());
engine.getNodeFactories().registerFactory(new DefaultNodeFactory());
engine.getLinkFactories().registerFactory(new DefaultLinkFactory());

// create a diagram model
const model = new DiagramModel();

// install the model into the engine
engine.setDiagramModel(model);

//####################################################
// ------------- SERIALIZING ------------------
let str = JSON.stringify(model.serializeDiagram());

// // !------------- DESERIALIZING ----------------
let cerealBox = new DiagramModel();
cerealBox.deSerializeDiagram(JSON.parse(str), engine);
engine.setDiagramModel(cerealBox);
cerealBox.serializeDiagram();

class CustomExample extends React.Component {
  createNode = () => {
    let newItem = new JSCustomNodeModel();
    newItem.nameNode("Enter Node Name...");
    newItem.provideDescription("Enter Description...");
    newItem.setPosition(0, 0);
    cerealBox.addNode(newItem);
    this.forceUpdate();
  };

  deleteNode = (node) => {
    console.log(node);
    cerealBox.getSelectedItems(node);
    // cerealBox.deleteNode();
    this.forceUpdate();
  }

  zoomOut = () => {
    let zoomLevel = cerealBox.getZoomLevel()
    console.log(zoomLevel);
    zoomLevel += 10;
    cerealBox.setZoomLevel(zoomLevel);
    cerealBox.fireEvent({ zoomLevel }, 'zoomUpdated');
    this.forceUpdate();
  };
f
  zoomIn = () => {
    let zoomLevel = cerealBox.getZoomLevel()
    console.log(zoomLevel);
    zoomLevel -= 10;
    cerealBox.setZoomLevel(zoomLevel);
    cerealBox.fireEvent({ zoomLevel }, 'zoomUpdated');
    this.forceUpdate();
  };

  render() {
    return (
      <div className="diagram-page">
        <section className="title-and-buttons">
          <h1>Enter Project Title...</h1>
          <div className="project-buttons">
            <button
              onClick={() => {
                console.log(cerealBox.serializeDiagram());
              }}
            >
              Simulate App
            </button>
            <button
              onClick={() => {
                console.log(cerealBox.serializeDiagram());
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                console.log(cerealBox.serializeDiagram());
              }}
            >
              Publish
            </button>
          </div>
        </section>

        <section className="taskbar">
          <div className="taskbar-left-section">
            <div className="taskbar-section">
              <img
                src={Plus}
                alt="alt text"
                onClick={() => {
                  this.createNode();
                }}
              />
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
              <img 
                src={Trashcan} 
                alt="alt text" 
                onClick={(node) => {
                  console.log('node', node);
                  this.deleteNode(node);
                }}
              />
            </div>
          </div>

          <div className="taskbar-right-section">
            <div className="taskbar-section">
              <img 
                src={ZoomOut} 
                alt="alt text"
                onClick={() => {
                  this.zoomIn();
                }}
               />
              <img 
                src={ZoomIn} 
                alt="alt text"
                onClick={() => {
                  this.zoomOut();
                }}
              />
            </div>
            <div className="taskbar-section">
              <img src={DocSettings} alt="alt text" />
            </div>
          </div>
        </section>

        <BodyWidget engine={engine} />
      </div>
    );
  }
}

export default CustomExample;
