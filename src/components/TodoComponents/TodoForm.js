import React from 'react';
import { TextInputGroup } from './TextInputGroup';

export function TodoForm(props) {
	const { value, handleOnchange } = props;

	return (
		<form className="form" action="">
			<TextInputGroup type="text" placeholder="Enter value" value={value} handleOnchange={handleOnchange} />
		</form>
	);
}
