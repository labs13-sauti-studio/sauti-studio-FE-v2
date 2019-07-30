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

  //####################################################
  // now create two nodes of each type, and connect them

  const node1 = new JSCustomNodeModel();
  node1.nameNode("Node 1");
  node1.provideDescription("Description node 2");
  node1.setPosition(150, 300);

  const node2 = new JSCustomNodeModel();
  node2.nameNode("Node 2");
  node2.provideDescription("Description node 2");
  node2.setPosition(900, 150);

  const node3 = new JSCustomNodeModel();
  node3.nameNode("Node 3");
  node3.provideDescription("Description node 3");
  node3.setPosition(900, 900);

  // 3-C) link the 2 nodes together
  const link1 = new DefaultLinkModel();
  // link1.setSourcePort(node1.getPort("out"));
  link1.setTargetPort(node2.getPort("in"));

  const link2 = new DefaultLinkModel();
  link2.setTargetPort(node3.getPort("in"));

  // 4) add the models to the root graph
  model.addAll(node1, node2, node3);

	
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
