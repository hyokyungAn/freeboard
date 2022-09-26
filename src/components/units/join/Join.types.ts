import {
	FormState,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";

export interface IFormData {
	email: string;
	password: string;
	passwordCheck: string;
	name: string;
}

export interface IJoinUIProps {
	handleSubmit: UseFormHandleSubmit<IFormData>;
	register: UseFormRegister<IFormData>;
	formState: FormState<IFormData>;
	onClickJoin: (data: IFormData) => void;
}
