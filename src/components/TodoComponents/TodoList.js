import React from 'react';
import { Todo } from './Todo';
import { TextInputGroup } from './TextInputGroup';
/**
 * 
 * your components will all go in this `component` directory.
feel free to change this component.js into TodoList.js
 */
export function TodoList(props) {
	const { todoList, toggleTodoCompleted, value, inputChange } = props;

	return (
		<div>
			<TextInputGroup
				type="text"
				name="search"
				placeholder="Enter search keyword"
				value={value}
				inputChange={inputChange}
			/>
			<ul>
				{/* eslint-disable-next-line array-callback-return */}
				{todoList.map(todo => {
					if (todo.task.includes(value)) {
						return <Todo key={todo.id} toggleTodoCompleted={toggleTodoCompleted} {...todo} />;
					}
				})}
			</ul>
		</div>
	);
}
