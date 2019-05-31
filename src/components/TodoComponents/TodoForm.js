import React from 'react';
import { TextInputGroup } from './TextInputGroup';

export function TodoForm(props) {
	const { value, addNewTodo, removeCompletedTodo, inputChange } = props;

	return (
		<form
			className="form"
			action=""
			onSubmit={evt => {
				evt.preventDefault();
				addNewTodo();
			}}
		>
			<TextInputGroup
				type="text"
				name="descriptionValue"
				placeholder="Enter value"
				value={value}
				inputChange={inputChange}
			/>

			<button type="button" className="btn add" onClick={() => addNewTodo()}>
				Add Todo
			</button>
			<button type="button" className="btn remove" onClick={() => removeCompletedTodo()}>
				Clear Completed
			</button>
		</form>
	);
}
