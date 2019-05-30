import React from 'react';
import './Todo.css';

export function Todo(props) {
	const { task, completed, id, handleClick, actionType } = props;
	const addNewClass = completed ? 'strikethrough' : '';
	return (
		<li
			className={`list-item ${addNewClass}`}
			completed={`${completed}`}
			data-id={id}
			onClick={handleClick}
			data-action={actionType}
		>
			{task}
		</li>
	);
}
