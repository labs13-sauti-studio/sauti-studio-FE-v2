import * as React from "react";
import { DiagramEngine, DiagramWidget, DiagramProps } from "@projectstorm/react-diagrams";

export interface BodyWidgetProps {
	engine: DiagramEngine;
}

export class BodyWidget extends React.Component<BodyWidgetProps> {

	

	render() {
		let props = {
			diagramEngine: this.props.engine,
			maxNumberPointsPerLink: 1
		} as DiagramProps;
		return (
			<DiagramWidget className="diagram-container" {...props} />
		);
	}
}
