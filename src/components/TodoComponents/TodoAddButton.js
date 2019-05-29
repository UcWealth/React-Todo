import React from 'react';

export function TodoAddButton(props) {
	const { buttonText, buttonType, handleClick, actionType } = props;

	return (
		<button type={buttonType} className="btn" onClick={handleClick} data-action={actionType}>
			{buttonText}
		</button>
	);
}
