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
    this.color = this.color || { options: "red" };
    this.name = this.options.name;
    this.description = this.options.description;

    let port = this.addPort(
      new DefaultPortModel({
        in: true,
        name: "in"
      })
    );
    port.setMaximumLinks(1);
  }

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
    let port = this.addPort(
      new DefaultPortModel({
        in: false,
        label: label,
        name: name
      })
    );
    port.setMaximumLinks(1);
    return port;
  }

  removePort(port, engine) {
    let model = engine.getModel();
    let links = port.getLinks();
    for(let key in links){
      model.removeLink(links[key]);
    }
    super.removePort(port);
  }

  removePorts(engine) {
    let model = engine.getModel();
    _.forEach(this.ports, port => {
      let links = port.getLinks();
      for(let key in links){
        model.removeLink(links[key]);
      }
      super.removePort(port);
    });
  }
}
