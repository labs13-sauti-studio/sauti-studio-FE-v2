import createEngine, {
	DiagramModel,
	DefaultNodeModel,
	DefaultPortModel,
	DefaultLinkFactory,
	DefaultLinkModel,
	DefaultLinkSegmentWidget,
	PortModel,
	DefaultLinkWidget
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

export class AdvancedPortModel extends DefaultPortModel {
	createLinkModel() {
		console.log("this",this);
		if(this.options.in === false){
			let links = this.getLinks();
			for(let key in links){
				if(links[key].renderedPaths.length > 0){
					return;
				}
			}
			return new AdvancedLinkModel();
		} return null;
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