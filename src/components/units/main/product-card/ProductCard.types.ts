import { MouseEvent } from "react";

export interface IProductCardProps {
	el: any;
	data: any;
}

export interface IProductCardUIProps {
	el: any;
	isActive: Boolean;
	onClickPick: (event: MouseEvent<HTMLDivElement>) => void;
	onClickMoveToBrandDetail: (el: any) => (event: any) => void;
}
