import { AdvancedPortModel } from './JSCustomPortAndLink';
import { AbstractModelFactory } from '@projectstorm/react-canvas-core';

export class AdvancedPortFactory extends AbstractModelFactory {
	constructor() {
        super();
        super.type = "advanced";
	}

	generateModel(){
		return new AdvancedPortModel({
			name: 'unknown'
		});
	}
}
