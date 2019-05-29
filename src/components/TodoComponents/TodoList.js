import React from 'react';
import { Todo } from './Todo';
/**
 * 
 * your components will all go in this `component` directory.
feel free to change this component.js into TodoList.js
 */
export function TodoList(props) {
	const { todoList, handleClick } = props;

	return (
		<ul>{todoList.map(todo => <Todo key={todo.id} handleClick={handleClick} {...todo} actionType="selected" />)}</ul>
	);
}
