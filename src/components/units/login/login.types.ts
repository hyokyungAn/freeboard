import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface ILoginUIProps {
	handleSubmit: UseFormHandleSubmit<FieldValues>;
	register: any;
	formState: any;
	isActive?: boolean;
	onClickLogin: (data: ILoginUser) => void;
}

export interface ILoginUser {
	email: string;
	password: string;
}
