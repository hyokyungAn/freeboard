import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface IJoinProps {
	handleSubmit: UseFormHandleSubmit<FieldValues>;
	register: any;
	formState: any;
	onClickJoin: (data: any) => void;
}
