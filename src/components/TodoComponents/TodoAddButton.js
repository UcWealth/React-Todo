import React from 'react';

export function TodoAddButton(props) {
	const { buttonText, buttonType, handleAddTodoClick } = props;

	return (
		<button type={buttonType} className="btn" onClick={handleAddTodoClick}>
			{buttonText}
		</button>
	);
}
