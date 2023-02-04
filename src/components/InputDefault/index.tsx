import { TextField } from '@mui/material';
import React from 'react';

interface InputDefaultProp {
	name: Name;
	type: string;
	label: string;
	value: string;
	color: 'error' | 'success';
	handleChange: (value: string, name: Name) => void;
	onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
}

export type Name = 'name' | 'email' | 'password' | 'confirmPassword';

const InputDefault: React.FC<InputDefaultProp> = ({
	name,
	type,
	label,
	value,
	color,
	handleChange,
	onKeyDown,
}) => {
	return (
		<>
			<TextField
				id={name}
				name={name}
				label={label}
				type={type}
				value={value}
				color={color}
				onChange={(e) => handleChange(e.target.value, name)}
				onKeyDown={onKeyDown}
			/>
		</>
	);
};

export default InputDefault;
