import { ChangeEvent } from "react";

export interface IBrandPointProps {
	handleCancel: any;
	refetch: any;
}

export interface IBrandPointUIProps {
	selected: number;
	requestPay: any;
	handleCancel: any;
	onChangeAmount: (event: string) => void;
}
