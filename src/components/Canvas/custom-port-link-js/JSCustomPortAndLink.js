import {
	DefaultLinkFactory,
	DefaultLinkModel,
	PortModel,
	DefaultLinkWidget,
	PortModelAlignment
} from '@projectstorm/react-diagrams';
import * as React from 'react';


export class AdvancedLinkModel extends DefaultLinkModel {
	constructor(options) {
		super({
			type: 'default',
			width: 5,
			color: 'black',
			selectedColor: "#ff7300",
			curvyness: 200,
			...options
		});
	}
}

export class AdvancedPortModel extends PortModel {
	constructor(options) {
		super({
		  ...options,
		  type: "advanced",
		  alignment: options.in ? PortModelAlignment.LEFT : PortModelAlignment.RIGHT
		});
		this.in = this.options.in;
		this.name = this.options.name;
		this.label = this.options.label;
		this.locked = this.options.locked;
	  }

	deserialize(event) {
		super.deserialize(event);
		this.options.in = event.data.in;
		this.options.label = event.data.label;
		this.options.locked = event.data.locked;
	}

	serialize() {
		return {
			...super.serialize(),
			in: this.options.in,
			label: this.options.label,
			locked: this.options.locked
		};
	}

	link(port, factory){
		let link = this.createLinkModel(factory);
		link.setSourcePort(this);
		link.setTargetPort(port);
		return link;
	}

	canLinkToPort(port){
		if (port) {
			return this.options.in !== port.getOptions().in;
		}
		return true;
	}

	createLinkModel(factory){
		let maxLinks = 1;
		let number = 0;
		let links = super.getLinks();
		for(let key in links){
			number = number + links[key].renderedPaths.length;
		}
		if(maxLinks > number){
			let link = new AdvancedLinkModel();
			if (!link && factory) {
				return factory.generateModel({});
			}
			return link || new AdvancedLinkModel();
		}
	}
}



export class AdvancedLinkFactory extends DefaultLinkFactory {
	constructor() {
		super('advanced');
	}

	generateModel() {
		return new AdvancedLinkModel();
	}

	generateReactWidget(event) {
		return <DefaultLinkWidget link={event.model} diagramEngine={this.engine} />;
	}

	generateLinkSegment(model, selected, path) {
		return (
			<path
			selected={selected}
			stroke={selected ? model.getOptions().selectedColor : model.getOptions().color}
			strokeWidth={model.getOptions().width}
			d={path}
			fill="none"
			/>
		);
	}
}


