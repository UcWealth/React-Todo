import React, { Component } from 'react';
import { TextInputGroup } from './TextInputGroup';

export class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	render() {
		const { value } = this.state;

		return (
			<form className="form" action="">
				<TextInputGroup type="text" placeholder="Enter value" value={value} />
			</form>
		);
	}
}
