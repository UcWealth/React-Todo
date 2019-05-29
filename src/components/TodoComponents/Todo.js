import React from 'react';

export function Todo(props) {
	const { task, completed, id } = props;
	return (
		<li className="list-item" completed={`${completed}`} data-id={id}>
			{task}
		</li>
	);
}
