import * as React from "react";
import "./main.css";
import {
  DefaultLinkModel,
  DiagramModel,
	DiagramEngine,
} from "@projectstorm/react-diagrams";
import { JSCustomNodeFactory } from "./custom-node-js/JSCustomNodeFactory";
import { JSCustomNodeModel } from "./custom-node-js/JSCustomNodeModel";
import { BodyWidget } from "./BodyWidget.tsx";
require("storm-react-diagrams/src/sass/main.scss");

	// create an instance of the engine
  // const engine = createEngine();

  //1) setup the diagram engine
  var engine = new DiagramEngine();
  engine.installDefaultFactories();

  // register the two engines
  engine.registerNodeFactory(new JSCustomNodeFactory());
  // engine.registerNodeFactory(new TSCustomNodeFactory());

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
		newItem.setPosition(0,0);
		cerealBox.addNode(newItem);
		this.forceUpdate();
	}

	render() {
		return (
      <>
      <section className="title-test-save-export">
          <div>       
          <h1>Project Title</h1>
          <h1>Enter Title Here</h1>
          </div>

          <div className="test-save-export">
            <button>Test</button>
            <button>Save</button>
            <button>Export</button>
            <button
				onClick={() => {
					console.log(cerealBox.serializeDiagram());
				}}
				>
					Serialize Graph
				</button>
				<button
				onClick={() => {
					this.createNode();
				}}
				>
					Create Node +
				</button>
          </div>
        </section>

			<div className="main-diagram-container">
				
				<div className="bodywidget-container">
					<BodyWidget engine={engine} />
				</div>
			</div>
      </>
		);
	}
}

export default CustomExample;
