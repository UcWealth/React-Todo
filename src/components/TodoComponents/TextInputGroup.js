import React from 'react';

export function TextInputGroup(props) {
	const { type, value, placeholder, handleOnchange } = props;

	return <input type={type} value={value} placeholder={placeholder} className="input" onChange={handleOnchange} />;
}

// set default props
TextInputGroup.defaultProps = {
	type: 'text'
};
