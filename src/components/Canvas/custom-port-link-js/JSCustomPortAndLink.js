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
	constructor() {
		super({
			type: 'advanced',
            width: 5,
            color: 'black',
            selectedColor: "#ff7300",
            curvyness: 200
		});
	}
}

export class AdvancedPortModel extends PortModel {
	constructor(options, name, label) {
		if (!!name) {
			options = {
				in: !!options,
				name: name,
				label: label
			};
		}
		super({
			label: options.label || options.name,
			alignment: options.in ? PortModelAlignment.LEFT : PortModelAlignment.RIGHT,
			type: 'default',
			...options
		});
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

	createLinkModel() {
		console.log("this",this);
		let length = Object.keys(this.links).length;
		if(this.options.in === false){
			if(length > 0){
				this.locked = true;
			}else{
				return new AdvancedLinkModel();
			}
		};
	}
}


export class AdvancedLinkSegment extends React.Component {

	constructor(model, selected, path) {
		super();
		this.percent = 0;
	}

	componentDidMount() {
		this.mounted = true;
		this.callback = () => {
			if (!this.circle || !this.path) {
				return;
			}

			this.percent += 2;
			if (this.percent > 100) {
				this.percent = 0;
			}

			let point = this.path.getPointAtLength(this.path.getTotalLength() * (this.percent / 100.0));

			this.circle.setAttribute('cx', '' + point.x);
			this.circle.setAttribute('cy', '' + point.y);

			if (this.mounted) {
				requestAnimationFrame(this.callback);
			}
		};
		requestAnimationFrame(this.callback);
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	render() {
		return (
			<>
				<path
					fill="none"
				
					strokeWidth={this.props.model.getOptions().width}
					d={this.props.path}
					selected={this.props.selected}
					stroke={this.props.selected ? this.props.model.getOptions().selectedColor : this.props.model.getOptions().color}
				/>
				{/* <circle
					ref={ref => {
						this.circle = ref;
					}}
					r={15}
					fill="black"
				/> */}
			</>
		);
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
// namespace S {
// 	export const Keyframes = keyframes`
// 		from {
// 			stroke-dashoffset: 24;
// 		}
// 		to {
// 			stroke-dashoffset: 0;
// 		}
// 	`;

// 	const selected = css`
// 		stroke-dasharray: 10, 2;
// 		animation: ${Keyframes} 1s linear infinite;
// 	`;

// 	export const Path = styled.path<{ selected: boolean }>`
// 		${p => p.selected && selected};
// 		fill: none;
// 		pointer-events: all;
// 	`;
// };

// export class AdvancedLinkFactory extends AbstractReactFactory{
// 	constructor(type = 'advanced') {
// 		super(type);
// 	}

// 	generateReactWidget(event) {
// 		return <DefaultLinkWidget link={event.model} diagramEngine={this.engine} />;
// 	}

// 	generateModel(event) {
// 		return new AdvancedLinkModel();
// 	}

// 	generateLinkSegment(model, selected, path) {
// 		return (
			// {/* <S.Path
			// 	selected={selected}
			// 	stroke={selected ? model.getOptions().selectedColor : model.getOptions().color}
			// 	strokeWidth={model.getOptions().width}
			// 	d={path}
			// /> */}
			
// 		);
// 	}
// }

{/* <g>
	<AdvancedLinkSegment model={model} selected={selected} path={path} />
</g> */}