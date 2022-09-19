import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface ILoginUIProps {
	handleSubmit: UseFormHandleSubmit<FieldValues>;
	register: any;
	formState: any;
	isActive?: boolean;
	onClickLogin: (data: any) => void;
}
