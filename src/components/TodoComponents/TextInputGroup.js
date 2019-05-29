import React from 'react';

export function TextInputGroup(props) {
	const { type, value, placeholder, handleOnchange, handleClick } = props;

	return (
		<input
			type={type}
			value={value}
			placeholder={placeholder}
			className="input"
			onChange={handleOnchange}
			onClick={handleClick}
		/>
	);
}

// set default props
TextInputGroup.defaultProps = {
	type: 'text'
};
