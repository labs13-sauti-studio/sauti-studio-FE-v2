import createEngine, {
	DiagramModel,
	DefaultNodeModel,
	DefaultPortModel,
	DefaultLinkFactory,
	DefaultLinkModel,
	DefaultLinkSegmentWidget,
	PortModel,
	DefaultLinkWidget,
	PortModelAlignment
} from '@projectstorm/react-diagrams';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
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
		this.setMaximumLinks(1);
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
		let maxLinks = this.getMaximumLinks();
		let links = super.getLinks();
		let length = Object.keys(links).length;
		if(maxLinks > length){
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
		console.log("selected",selected);
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


