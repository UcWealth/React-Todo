import React from 'react';

export function TextInputGroup(props) {
	const { type, value, placeholder } = props;

	return <input type={type} value={value} placeholder={placeholder} className="input" />;
}

// set default props
TextInputGroup.defaultProps = {
	type: 'text'
};
