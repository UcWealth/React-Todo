import React from 'react';

export function TodoForm(props) {
	const { type, name, placeholder, value } = props;
	return (
		<form className="form" action="">
			<TextInputGroup type={type} name={name} placeholder={placeholder} value={value} />
		</form>
	);
}
