import {
	FormState,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";

export interface ILoginUIProps {
	handleSubmit: UseFormHandleSubmit<ILoginUser>;
	register: UseFormRegister<ILoginUser>;
	formState: FormState<ILoginUser>;
	isActive?: boolean;
	onClickLogin: (data: ILoginUser) => void;
}

export interface ILoginUser {
	email: string;
	password: string;
}
