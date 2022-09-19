import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface IJoinUIProps {
	handleSubmit: UseFormHandleSubmit<FieldValues>;
	register: any;
	formState: any;
	onClickJoin: (data: any) => void;
}
