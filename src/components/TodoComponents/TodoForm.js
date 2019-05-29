import React from 'react';
import { TextInputGroup } from './TextInputGroup';
import { TodoAddButton } from './TodoAddButton';

export function TodoForm(props) {
	const { value, handleOnchange, handleButtonClick } = props;

	return (
		<form className="form" action="">
			<TextInputGroup type="text" placeholder="Enter value" value={value} handleOnchange={handleOnchange} />
			<TodoAddButton buttonText="Add" buttonType="button" handleButtonClick={handleButtonClick} />
		</form>
	);
}
