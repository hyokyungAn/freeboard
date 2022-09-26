import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface IGrayInputProps {
	type?: string;
	placeholder?: string;
	register: UseFormRegisterReturn<
		| "name"
		| "remarks"
		| "price"
		| "address"
		| "addressDetail"
		| "email"
		| "password"
		| "passwordCheck"
	>;
	defaultValue?: string | number;
	readOnly?: boolean;
}

export default function GrayInput(props: IGrayInputProps) {
	return (
		<Input
			readOnly={props.readOnly}
			type={props.type}
			placeholder={props.placeholder}
			{...props.register}
			defaultValue={props.defaultValue}
		/>
	);
}

const Input = styled.input`
	background-color: #e9e9e9;
	border: none;
	outline: none;
	width: 100%;
	padding: 10px 15px;

	::placeholder {
		color: #c0c0c0;
		font-size: small;
		transition: all 0.3s ease-in-out;
	}
`;
