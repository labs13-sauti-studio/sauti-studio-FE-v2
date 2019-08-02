import * as React from "react";
// import * as ReactDOM from "react-dom";
import "./main.css";
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
		newItem.setPosition(0,0);
		cerealBox.addNode(newItem);
		this.forceUpdate();
	}

	render() {
		return (
			<div className="main-diagram-container">
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
				<div className="bodywidget-container">
					<BodyWidget engine={engine} />
				</div>
			</div>
		);
	}
}

export default CustomExample;
