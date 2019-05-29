import React from 'react';

export function TodoAddButton(props) {
	const { buttonText, buttonType, handleButtonClick } = props;

	return (
		<button type={buttonType} className="btn" onClick={handleButtonClick}>
			{buttonText}
		</button>
	);
}
