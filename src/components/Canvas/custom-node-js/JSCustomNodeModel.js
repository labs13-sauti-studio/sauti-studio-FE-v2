import {
  DefaultPortModel,
  NodeModel
} from "@projectstorm/react-diagrams";

import * as _ from "lodash";

export class JSCustomNodeModel extends NodeModel {
  constructor(options = {}) {
    super({
      ...options,
      type: "js-custom-node"
    });
    console.log("this",this);
    console.log("options",options);
    this.outPortCount = 0;
    this.color = this.color || { options: "red" };
    this.name = this.options.name;
    this.description = this.options.description;

    this.addPort(
      new DefaultPortModel({
        in: true,
        name: "in"
      })
    );
  }

  // serialize() {
  //   return {
  //     ...super.serialize(),
  //     color: this.options.color,
  //     name: this.name,
  //     description: this.description
  //   };
  // }

  // deSerialize(ob, engine) {
  //   super.deSerialize(ob, engine);
  //   this.color = ob.color;
  //   this.name = ob.name;
  //   this.description = ob.description;
  // }

  deserialize(event) {
		super.deserialize(event);
		this.options.name = event.data.name;
    this.options.color = event.data.color;
    this.options.description = event.data.description;
	}

	serialize(){
		return {
			...super.serialize(),
			name: this.options.name,
      color: this.options.color,
      description: this.options.description
		};
	}

  nameNode(name) {
    this.options.name = name;
  }

  provideDescription(description) {
    this.options.description = description;
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
