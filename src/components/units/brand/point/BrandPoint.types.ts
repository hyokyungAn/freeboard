import { ChangeEvent } from "react";

export interface IBrandPointProps {
	isCharge: boolean;
	handleCancel: any;
	refetch: any;
	onClickCharge: () => void;
}

export interface IBrandPointUIProps {
	selected: number;
	requestPay: any;
	handleCancel: any;
	onChangeAmount: (event: string) => void;
}
