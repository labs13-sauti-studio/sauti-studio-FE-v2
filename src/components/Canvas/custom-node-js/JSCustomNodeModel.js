import {DefaultPortModel, NodeModel, Toolkit} from "@projectstorm/react-diagrams";
import * as _ from "lodash";
/**
 * Example of a custom model using pure javascript
 */
export class JSCustomNodeModel extends NodeModel {

	constructor(options = {}) {
		super('js-custom-node');
		// this.color = options.color || {options: 'red'};
		// we made this
		this.name = options.name;
		this.description = options.description;
		// ------------

		// setup an in and out port
		this.addPort(new DefaultPortModel(true,"in"));
	}

	// addOutPort(label: string) {
	// 	return this.addPort(new DefaultPortModel(false, Toolkit.UID(), label));
	// }


	// serialize() {
	// 	return {
	// 		...super.serialize(),
	// 		// color: this.options.color
	// 	}
	// }

	serialize() {
		return _.merge(super.serialize(), {
			name: this.name,
			description: this.description
		});
	}

	// deSerialize(ob, engine) {
	// 	super.deSerialize(ob, engine);
	// 	this.color = ob.color;
	// }

	deSerialize(object, engine) {
		super.deSerialize(object, engine);
		this.name = object.name;
		this.description = object.description;
	}

	nameNode(name){
		this.name = name;
	}

	provideDescription(description){
		this.description = description;
	}

	addOutPort(label) {
		return this.addPort(new DefaultPortModel(false, Toolkit.UID(), label));
	}
	
	removePortAndLinks(port) {
		//clear the parent node reference
		if (this.ports[port.name]) {
			_.forEach(port.getLinks(), link => {
				link.remove();
			});
			this.ports[port.name].setParent(null);
			delete this.ports[port.name];
		}
	}
}
