import React from 'react';

export function TodoAddButton(props) {
	const { buttonText, buttonType } = props;

	return (
		<button type={buttonType} className="btn">
			{buttonText}
		</button>
	);
}
