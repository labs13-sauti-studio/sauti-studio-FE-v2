import * as React from "react";
// import { DiagramEngine, DiagramWidget, DiagramProps } from "@projectstorm/react-diagrams";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import { CanvasWidget } from '@projectstorm/react-canvas-core';

export interface BodyWidgetProps {
	engine: DiagramEngine;
}

export class BodyWidget extends React.Component<BodyWidgetProps> {
	render() {
		return (
			<CanvasWidget className="diagram-container" engine={this.props.engine} />
		);
	}
}

// export class BodyWidget extends React.Component<BodyWidgetProps> {
// 	render() {
// 		let props = {
// 			diagramEngine: this.props.engine,
// 			maxNumberPointsPerLink: 1
// 		} as DiagramProps;
// 		return (
// 			<CanvasWidget className="diagram-container" {...props} />
// 		);
// 	}
// }
