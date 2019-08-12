import * as React from "react";
import Trashcan from "../../images/icons/trash.png";
import DocSettings from "../../images/icons/docSettings.png";
import Gear from "../../images/icons/gear.png";
import Lock from "../../images/icons/lock.png";
import PaintBucket from "../../images/icons/paintBucket.png";
import Plus from "../../images/icons/plus.png";
import ZoomIn from "../../images/icons/zoomIn.png";
import ZoomOut from "../../images/icons/zoomOut.png";
import { connect } from "react-redux";
import { saveCanvas, getCanvasById } from "../../actions";

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
let engine = createEngine();

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
// cerealBox.serializeDiagram();

class CustomExample extends React.Component {
  state = {
    selectedColor: "#B80000",
    canvas_stop: false
  }

  componentDidMount(){
    this.getCanvas();
  }

  componentDidUpdate(prevProps, prevState){
    
    if(this.props.saving_canvas !== prevProps.saving_canvas && this.props.saving_canvas === false){
      this.getCanvas();
    }
    // else if(){
    //   this.setState({
    //     ...this.state,
    //     canvas_stop: false
    //   });
    // }
    else if(this.props.fetching !== prevProps.fetching && (this.props.graph_json !== null ) && this.props.saving_canvas === prevProps.saving_canvas){
      cerealBox.deSerializeDiagram(this.props.graph_json, engine);
      engine.setDiagramModel(cerealBox);
      engine.repaintCanvas();
    }
    else{
      engine.setDiagramModel(model);
      engine.repaintCanvas();
    }
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

  zoomIn = () => {
    let zoomLevel = cerealBox.getZoomLevel()
    console.log(zoomLevel);
    zoomLevel -= 10;
    cerealBox.setZoomLevel(zoomLevel);
    cerealBox.fireEvent({ zoomLevel }, 'zoomUpdated');
    engine.repaintCanvas();
  };

  getCanvas = () => {
    this.props.getCanvasById(this.props.project_id);
  }

  saveCanvas1 = (event) => {
    event.preventDefault();
    let savedCanvas = cerealBox.serializeDiagram();
    const objUpdate = {
        "project_title": this.props.project_title,
        "graph_json": savedCanvas,
        "user_id": this.props.user_id
    }
    // this.setState({
    //   ...this.state,
    //   canvas_stop: true
    // });
    console.log("objUpdate",objUpdate);
    this.props.saveCanvas(objUpdate, this.props.project_id);
  }

  render() {
    return (
      <div className="diagram-page">
        <section className="title-and-buttons">
          <h1>{this.props.project_title}</h1>
          <div className="project-buttons">
            <button
              onClick={() => {
                console.log(cerealBox.serializeDiagram());
              }}
            >
              Simulate App
            </button>
            <button
              onClick={(event) => {
                this.saveCanvas1(event);
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
        {
          (
            this.state.canvas_stop === true  
          )?(
            <p>waiting</p>
          ):(

        <BodyWidget engine={engine} />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user_id: state.user_id,
  project_id: state.project_id,
  project_title: state.project_title,
  graph_json: state.graph_json,
  fetching: state.fetching,
  error: state.error,
  loggedIn: state.loggedIn,
  saving_canvas: state.saving_canvas
});

export default connect(
  mapStateToProps,
  { saveCanvas, getCanvasById }
  )(CustomExample); 