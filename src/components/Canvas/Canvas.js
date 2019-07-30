import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  LinkModel,
  DiagramWidget,
  DefaultLinkModel
} from "storm-react-diagrams";

import * as React from "react";

import "./canvas.scss";
require("storm-react-diagrams/src/sass/main.scss");

export default () => {
  //1) setup the diagram engine
  var engine = new DiagramEngine();
  engine.installDefaultFactories();

  //2) setup the diagram model
  var model = new DiagramModel();

  //3-A) create a default node
  var node1 = new DefaultNodeModel("Node 0");
  let port1 = node1.addOutPort("Out");
  let port3 = node1.addOutPort("Out2");
  node1.addOutPort("Out3");
  node1.addOutPort("Out4");
  node1.setPosition(100, 100);

  //3-B) create another default node
  var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
  node2.addOutPort("Out1");
  node2.addOutPort("Out2");
  node2.addOutPort("Out3");
  node2.addOutPort("Out4");
  let port2 = node2.addInPort("In");
  node2.setPosition(400, 100);

  // link the ports
  let link1 = port1.link(port2);
  // link1.addLabel("Hello World!");

  //4) add the models to the root graph
  model.addAll(node1, node2, link1);

  //5) load model into engine
  engine.setDiagramModel(model);

  //6) render the diagram!
  return <DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />;
};
