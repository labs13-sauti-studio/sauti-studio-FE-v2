import * as React from "react";
import {Fragment} from "react";
import Trashcan from "../../images/icons/trash.png";
import DocSettings from "../../images/icons/docSettings.png";
import Gear from "../../images/icons/gear.png";
import Lock from "../../images/icons/lock.png";
import PaintBucket from "../../images/icons/paintBucket.png";
import Plus from "../../images/icons/plus.png";
import ZoomIn from "../../images/icons/zoomIn.png";
import ZoomOut from "../../images/icons/zoomOut.png";

import createEngine, {
  DiagramModel,
  DefaultNodeFactory,
  DefaultLinkFactory,
  DefaultLinkModel,
  PointModel
} from "@projectstorm/react-diagrams";
import { JSCustomNodeFactory } from "./custom-node-js/JSCustomNodeFactory";
import { JSCustomNodeModel } from "./custom-node-js/JSCustomNodeModel";
import { BodyWidget } from "./BodyWidget";

import Swatches from '../Swatches/Swatches';

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
  state = {
    selectedColor: "#B80000"
  }

  updateSelectedColor = selectedColor => {
    let selectedItems = cerealBox.getSelectedItems();
 
    this.setState({selectedColor}, () => this.changeColor(selectedItems))
  }

  createNode = () => {
    let newItem = new JSCustomNodeModel();
    newItem.nameNode("Enter Node Name...");
    newItem.provideDescription("Enter Description...");
    newItem.setPosition(0, 0);
    cerealBox.addNode(newItem);
    engine.repaintCanvas();
  };

  deleteItem = (item) => {
    // Checks if a node or wire is selected
    if (item.length !== 0) {
      if (item[0] instanceof JSCustomNodeModel) {
        // Delete Nodes
        item[0].removePorts();
        cerealBox.removeNode(item[0]);
        engine.repaintCanvas();
      } else if (item[0] instanceof PointModel) {
        cerealBox.removeLink(item[0].parent);
        engine.repaintCanvas();
      } else if (item[0] instanceof DefaultLinkModel) {
        // Delete Links
        cerealBox.removeLink(item[0]);
        engine.repaintCanvas();
      }
    } 
  }

  changeColor = (item) => {
    // Checks if a node or wire is selected
    console.log(item[0])
    console.log('line 78: item[0].constructor.name', item[0].constructor.name)
    if (item.length !== 0) {
      if (item[0] instanceof JSCustomNodeModel) {
        console.log('JSCustomNodeModel detected');
        // Change Node Color
        // item[0].removePorts();
        // engine.repaintCanvas();
      } else if (item[0] instanceof PointModel) {
        console.log('PointModel detected');
        // Change Link Color
        console.log("----");
        item[0].parent.setColor(this.state.selectedColor);
        engine.repaintCanvas();
      } else if (item[0] instanceof DefaultLinkModel) {
        console.log('Link detected');
        // Change Link Color
        item[0].setColor("#FCCB00");
        engine.repaintCanvas();
      }
    } 
  }

  zoomOut = () => {
    let zoomLevel = cerealBox.getZoomLevel()
    console.log(zoomLevel);
    zoomLevel += 10;
    cerealBox.setZoomLevel(zoomLevel);
    cerealBox.fireEvent({ zoomLevel }, 'zoomUpdated');
    engine.repaintCanvas();
  };
f
  zoomIn = () => {
    let zoomLevel = cerealBox.getZoomLevel()
    console.log(zoomLevel);
    zoomLevel -= 10;
    cerealBox.setZoomLevel(zoomLevel);
    cerealBox.fireEvent({ zoomLevel }, 'zoomUpdated');
    engine.repaintCanvas();
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
              <img 
                src={PaintBucket} 
                alt="alt text" 
                // onClick={() => {
                //   let selectedItems = cerealBox.getSelectedItems();
                //   console.log('SELECTED ITEM', selectedItems)
                //   this.changeColor(selectedItems);
                // }}
              />
              <Swatches cerealBox={cerealBox} changeColor={this.changeColor} updateSelectedColor={this.updateSelectedColor} />
            </div>
            <div className="taskbar-section">
              <img src={Lock} alt="alt text" />
              <img src={Gear} alt="alt text" />
            </div>
            <div className="taskbar-section">
              <img 
                src={Trashcan} 
                alt="alt text" 
                onClick={() => {
                  let selectedItems = cerealBox.getSelectedItems();
                  this.deleteItem(selectedItems);
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
