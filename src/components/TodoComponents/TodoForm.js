import React from 'react';
import { TextInputGroup } from './TextInputGroup';
import { TodoAddButton } from './TodoAddButton';

export function TodoForm(props) {
	const { value, handleOnchange, handleClick } = props;

	return (
		<form className="form" action="">
			<TextInputGroup
				type="text"
				placeholder="Enter value"
				value={value}
				handleOnchange={handleOnchange}
				handleClick={handleClick}
			/>
			<TodoAddButton buttonText="Add Todo" buttonType="button" handleClick={handleClick} actionType="add" />
			<TodoAddButton buttonText="Clear Completed" buttonType="button" handleClick={handleClick} actionType="clear" />
		</form>
	);
}
