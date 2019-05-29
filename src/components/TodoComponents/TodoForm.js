import React from 'react';
import { TextInputGroup } from './TextInputGroup';
import { TodoAddButton } from './TodoAddButton';

export function TodoForm(props) {
	const { value, handleOnchange, handleAddTodoClick } = props;

	return (
		<form className="form" action="">
			<TextInputGroup type="text" placeholder="Enter value" value={value} handleOnchange={handleOnchange} />
			<TodoAddButton buttonText="Add Todo" buttonType="button" handleAddTodoClick={handleAddTodoClick} />
			<TodoAddButton buttonText="Clear Completed" buttonType="button" />
		</form>
	);
}
