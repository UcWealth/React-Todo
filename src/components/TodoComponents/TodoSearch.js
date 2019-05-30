import React from 'react';
import { TextInputGroup } from './TextInputGroup';

export const TodoSearch = props => {
	const { value, inputChange } = props;
	return (
		<div>
			<TextInputGroup
				type="text"
				name="search"
				placeholder="Enter search keyword"
				value={value}
				inputChange={inputChange}
			/>
		</div>
	);
};
