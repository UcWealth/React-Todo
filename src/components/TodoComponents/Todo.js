import React from 'react';

export function Todo(props) {
	const { task, completed, id, handleClick, actionType } = props;
	return (
		<li className="list-item" completed={`${completed}`} data-id={id} onClick={handleClick} data-action={actionType}>
			{task}
		</li>
	);
}
