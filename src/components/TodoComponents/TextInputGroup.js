import React from 'react';

export function TextInputGroup(props) {
	const { type, value, placeholder, inputChange, name } = props;

	return (
		<input
			type={type}
			value={value}
			placeholder={placeholder}
			className="input"
			onChange={evt => {
				const value = evt.target.value;
				const field = evt.target.name;
				inputChange(field, value);
			}}
			name={name}
		/>
	);
}

// set default props
TextInputGroup.defaultProps = {
	type: 'text'
};
