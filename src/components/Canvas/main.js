import * as React from "react";
import { connect } from "react-redux";
import { saveCanvas, getCanvasById, deleteProject, setDeleteState, setSimulationState, saveTitle, getTitleById, publishCanvas } from "../../actions";
import DeleteModal from "../DeleteModal.js";
import SimulationModal from "../SimulationModal.js";

import createEngine, {
  DiagramModel,
  DefaultNodeFactory,
  DefaultLinkFactory,
  DefaultLinkModel,
  PointModel,
  DeleteItemsAction
} from "@projectstorm/react-diagrams";
import {AdvancedLinkFactory} from "./custom-port-link-js/JSCustomPortAndLink"

import { JSCustomNodeFactory } from "./custom-node-js/JSCustomNodeFactory";
import { JSCustomNodeModel } from "./custom-node-js/JSCustomNodeModel";
import { AdvancedPortFactory } from "./custom-port-link-js/JSCustomPortFactory";
import { BodyWidget } from "./BodyWidget";

// create an instance of the engine
let engine = createEngine();

// register the factories to the engine
engine.getPortFactories().registerFactory(new AdvancedPortFactory());
engine.getNodeFactories().registerFactory(new JSCustomNodeFactory());
engine.getNodeFactories().registerFactory(new DefaultNodeFactory());
engine.getLinkFactories().registerFactory(new DefaultLinkFactory());
engine.getLinkFactories().registerFactory(new AdvancedLinkFactory());

// create a diagram model
const model = new DiagramModel();

// install the model into the engine
engine.setModel(model);
// Set Link Break points to Zero for all Links
engine.setMaxNumberPointsPerLink(0);

// ------------- SERIALIZING ------------------
let str = JSON.stringify(model.serialize());

// ------------- DESERIALIZING ----------------
let cerealBox = new DiagramModel();
cerealBox.deserializeModel(JSON.parse(str), engine);
engine.setModel(cerealBox);

let obj = engine.eventBus.actions;
for(let key in obj){
  if(obj[key].options.type === "key-down"){
    engine.eventBus.deregisterAction(obj[key]);
  }
}
class CustomExample extends React.Component {
  constructor(props){
    super(props);
    this.ENTER_KEY = 13;
    this.state = {
      selectedColor: "#B80000",
      canvas_stop: false,
      project_title: null,
      project_title_class: false,
      delete_project: false,
      simulate_project: false
    }
  }

  componentDidMount(){
    // On load get project canvas
    this.getCanvas();
  }

  componentDidUpdate(prevProps, prevState){
    // If canvas is Saved retrieve new canvas
    if(this.props.saving_canvas !== prevProps.saving_canvas && this.props.saving_canvas === false){
      this.getCanvas();
    }

    // If title is Saved retrieve new title
    if((this.props.saving_title !== prevProps.saving_title && this.props.saving_title === false) && (prevProps.project_title !== this.props.project_title)){
      this.props.getTitleById(this.props.user_id);
    }

    // Handle Project title update on initial load
    if(((this.state.project_title !== this.props.project_title && this.state.project_title === null) || prevProps.project_title !== this.props.project_title)){
        this.setState({
          ...this.state,
          project_title: this.props.project_title
        });
      }
      
    // Handle Project canvas update on initial load
    if(this.props.fetching !== prevProps.fetching && this.props.fetching === false && this.props.graph_json !== null){
        cerealBox = new DiagramModel();
        cerealBox.deserializeModel(this.props.graph_json, engine);
        engine.setModel(cerealBox);
    }
    // when a new project is created
    if(this.props.graph_json === null){
      cerealBox = new DiagramModel();
      engine.setModel(cerealBox);
    }

    if(prevProps.publishing_canvas !== this.props.publishing_canvas && this.props.publishing_canvas === false){
      if(this.props.error === false)
        window.alert("Publishing Successful!");
      else
        window.alert(this.props.error)
    }
    
  }
  
  getCanvas = () => {
    this.props.getCanvasById(this.props.project_id);
  }
        
  saveCanvas = () => {
    let savedCanvas = cerealBox.serialize();
    // console.log("savedCanvas------------", savedCanvas);
    let key, objUpdate, parent_id = null;
    for (key in savedCanvas.layers[1].models) {
      if (savedCanvas.layers[1].models[key].is_parent === true){
        parent_id = savedCanvas.layers[1].models[key].id;
      };
    }
    if(parent_id !== null){
      objUpdate = {
        project_title: this.props.project_title,
        graph_json: savedCanvas,
        user_id: this.props.user_id,
        initial_node_id: parent_id 
      }
      this.props.saveCanvas(objUpdate, this.props.project_id);
    }else{
      window.alert("Check A Parent Node Before Saving!");
    }
  }

  publishCanvas = () => {
    let savedCanvas = cerealBox.serialize();
    console.log("savedCanvas------------", savedCanvas);
    let count = 0, key, objUpdate, parent_id = null;
    
    for (key in savedCanvas.layers[1].models) {
      if (savedCanvas.layers[1].models[key].is_parent === true){
        parent_id = savedCanvas.layers[1].models[key].id;
      };
    }
      objUpdate = {
        project_title: this.props.project_title,
        graph_json: savedCanvas,
        user_id: this.props.user_id,
        initial_node_id: parent_id 
      }
    console.log("PROJECT_ID", this.props.project_id)
    this.props.publishCanvas(objUpdate, this.props.project_id);

  }
  
  createNode = () => {
    let newItem = new JSCustomNodeModel();
    newItem.nameNode("Enter Node Name...");
    newItem.provideDescription("Enter Description...");
    newItem.setPosition(0, 0);
    cerealBox.addNode(newItem);
    this.saveCanvas();
  };
  
  zoomIn = () => {
    let zoomLevel = cerealBox.getZoomLevel()
    zoomLevel -= 10;
    cerealBox.setZoomLevel(zoomLevel);
    cerealBox.fireEvent({ zoomLevel }, 'zoomUpdated');
    engine.repaintCanvas();
  };

  zoomOut = () => {
    let zoomLevel = cerealBox.getZoomLevel()
    zoomLevel += 10;
    cerealBox.setZoomLevel(zoomLevel);
    cerealBox.fireEvent({ zoomLevel }, 'zoomUpdated');
    engine.repaintCanvas();
  };
  
  deleteItem = (item) => {
    // Checks if a node or wire is selected
    if (item.length !== 0) {
      function deleteNodes(item, length, i){
        if(i < length){
          if (item[i] instanceof JSCustomNodeModel) {
            // Delete Nodes
            let promise = new Promise((resolve, reject)=>{
              resolve(item[i].removePorts(engine));
            });
            promise.then(()=>{
              cerealBox.removeNode(item[i]);
            });
            promise.then(()=>{
              engine.repaintCanvas();
            }).then(()=>{
              let x = i + 1;
              deleteNodes(item, length, x);
            });
          } else{
            let x = i + 1;
            deleteNodes(item, length, x);
          }
        }
      }
      deleteNodes(item, item.length, 0)
      
        for(let i = 0; i < item.length; i++){
          if (item[i] instanceof PointModel) {
            // Delete Points
            let promise = new Promise((resolve, reject)=>{
              resolve(cerealBox.removeLink(item[i].parent));
            });
            promise.then(()=>{
              engine.repaintCanvas();
            });
          } else if (item[i] instanceof DefaultLinkModel) {
            // Delete Links
            let promise = new Promise((resolve, reject)=>{
              resolve(cerealBox.removeLink(item[i]));
            });
            promise.then(()=>{
              engine.repaintCanvas();
            });
          }
        }
    } 
  };

  handleEdit = (name) => {
    if (name === "project_title") {
      this.setState({
        ...this.state,
        project_title_class: !this.state.project_title_class
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleKeyDown = (event) => {
    if (event.which === this.ENTER_KEY) {
      this.handleSubmit(event);
    }
  }

  handleSubmit = (event) => {
    if (event.target.name === "project_title") {
      this.setState({
        ...this.state,
        project_title: this.state[event.target.name],
        project_title_class: !this.state.project_title_class
      });
      this.updateTitle();
    }
  }

  updateTitle = () => {
    const objUpdate = {
        "project_title": this.state.project_title,
    }
    this.props.saveTitle(objUpdate, this.props.project_id);
  }

  render() {
    return (
      <div className="diagram-page">
        <DeleteModal props={this.props.props}/>
        <SimulationModal props={this.props.props}/>
        <section className="title-and-buttons">
          <h2
            title="Double Click to Edit Title"
            className={this.state.project_title_class ? "hidden" : ""}
            onDoubleClick={()=>this.handleEdit("project_title")}>
            {this.state.project_title}
          </h2>
            <input
              name="project_title"
              placeholder="Enter something..."
              className={this.state.project_title_class ? "" : "hidden"}
              value={this.state.project_title}
              onChange={this.handleChange}
              onKeyDown={(event)=>{
                this.handleKeyDown(event)
                }}
              onKeyUp={(event) => {
              event.stopPropagation()
            }}
            />
          <div className="project-buttons">
            <button
              className="cursor"
              onClick={(event) => {
                this.saveCanvas(event);
              }}
            >
              Save App
            </button>
            <button
              className="cursor"
              onClick={() => {
                this.props.setSimulationState(this.props.simulate_project);
              }}
            >
              Simulate App
            </button>
            <button
              className="cursor"
              onClick={(event) => {
                this.publishCanvas(event);
              }}
            >
              Publish App
            </button>
            <button
              className="cursor"
              onClick={() => {
                this.props.setDeleteState(this.props.delete_project);
              }}
            >
              Delete App
            </button>
          </div>
        </section>

        <section className="taskbar">
        <div className="taskbar-container">
            <div className="taskbar-section">
              <i 
                className="fas fa-plus-square"
                title="Add Screen"
                onClick={() => {
                  this.createNode();
                }}
              ></i>
            </div>
               <div className="taskbar-section">
              <i 
                className="fas fa-search-plus"
                title="Zoom In"
                onClick={() => {
                  this.zoomOut();
                }}
              ></i>
            </div>
            <div className="taskbar-section">
               <i 
                className="fas fa-search-minus"
                title="Zoom Out"
                onClick={() => {
                  this.zoomIn();
                }}
               ></i>
               </div>
            <div className="taskbar-section">
              <i 
                className="fas fa-trash-alt"
                title="Delete Selected Items"
                onClick={() => {
                  let model = engine.getModel();
                  let selectedItems = model.getSelectedEntities();
                  this.deleteItem(selectedItems);
                }}
              ></i>
            </div>
            </div>

        </section>
        
        {
        (this.props.delete_project || this.props.fetching)?(
          <></>
        ):(
        <BodyWidget engine={engine} />
        )
        }
      </div>
    );
  }
}


// Global Redux State
const mapStateToProps = state => ({
  user_id: state.user_id,
  project_id: state.project_id,
  project_title: state.project_title,
  graph_json: state.graph_json,
  fetching: state.fetching,
  error: state.error,
  loggedIn: state.loggedIn,
  saving_canvas: state.saving_canvas,
  delete_project: state.delete_project,
  simulate_project: state.simulate_project,
  saving_title: state.saving_title,
  publishing_canvas: state.publishing_canvas,
  fetching_title: state.fetching_title
});

// Connecting State and Rdux Reducer Methods
export default connect(
  mapStateToProps,
  { saveCanvas, getCanvasById, deleteProject, setDeleteState, setSimulationState, saveTitle, getTitleById, publishCanvas }
)(CustomExample); 


        // Handle Project canvas update on initial load
        // if(this.props.project_id !== prevProps.project_id && this.props.fetching !== prevProps.fetching && this.props.fetching === false && this.props.graph_json !== null){
        //     cerealBox = new DiagramModel();
        //     cerealBox.deserializeModel(this.props.graph_json, engine);
        //     engine.setModel(cerealBox);
        // }

        // Handle Project canvas update on initial load
        // if(this.props.project_id !== prevProps.project_id && this.props.fetching !== prevProps.fetching && this.props.fetching === false && this.props.graph_json !== null && this.props.graph_json !== prevProps.graph_json){
        //   cerealBox = new DiagramModel();
        //     cerealBox.deserializeModel(this.props.graph_json, engine);
        //     engine.setModel(cerealBox);
        // }
        
        // Update JSON
        // if(this.props.graph_json !== null && this.props.graph_json !== prevProps.graph_json){
          //     cerealBox = new DiagramModel();
          //     cerealBox.deserializeModel(this.props.graph_json, engine);
          //     engine.setModel(cerealBox);
          // }