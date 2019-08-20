import {
  DefaultPortModel,
  NodeModel
} from "@projectstorm/react-diagrams";

import * as _ from "lodash";

export class JSCustomNodeModel extends NodeModel {
  constructor(options) {
    super({
      ...options,
      type: "js-custom-node"
    });
    console.log("this",this);
    this.outPortCount = 0;
    this.color = this.color || { options: "red" };
    this.name = this.name;
    this.description = this.description;

    this.addPort(
      new DefaultPortModel({
        in: true,
        name: "in"
      })
    );
  }

  serialize() {
    
    return {
      ...super.serialize(),
      color: this.options.color,
      name: this.name,
      description: this.description
    };
  }

  deSerialize(ob, engine) {
    super.deSerialize(ob, engine);
    this.color = ob.color;
    this.name = ob.name;
    this.description = ob.description;
  }

  nameNode(name) {
    this.name = name;
  }

  provideDescription(description) {
    this.description = description;
  }

  addOutPort(label, name) {
    this.outPortCount++;
    return this.addPort(
      new DefaultPortModel({
        in: false,
        label: label,
        name: name
      })
    );
  }

  removePort(port) {
    console.log("port", port);
    console.log("this.ports", this.ports);
    // console.log(port.getName());
    // console.log(port.getLinks());
    //clear the parent node reference
    if (this.ports[port.getName()]) {
      _.forEach(port.getLinks(), link => {
        link.remove();
      });
      this.ports[port.getName()].setParent(null);
      delete this.ports[port.getName()];
      // _.forEach(this.ports, port => {
      //   _.forEach(port.links, link => {
      //     link.getSVGPath();
      //   });
      // });
    }
    console.log("port", port);
    console.log("this.ports", this.ports);
  }

  removePorts() {
    _.forEach(this.ports, port => {
      _.forEach(port.getLinks(), link => {
        link.remove();
      });
    });
  }
}
