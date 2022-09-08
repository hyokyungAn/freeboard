import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface ILoginProps {
	handleSubmit: UseFormHandleSubmit<FieldValues>;
	register: any;
	formState: any;
	isActive?: boolean;
	onClickLogin: (data: any) => void;
}
