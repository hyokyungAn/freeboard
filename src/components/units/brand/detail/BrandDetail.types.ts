export interface IBrandDetailProps {
	el?: any;
	pickList?: any;
}

export interface IBrandDetailUIProps {
	data?: any;
	el: any;
	isActive: boolean;
	onClickBuy: () => void;
	onclickEdit: () => void;
	onClickDelete: () => void;
	onClickShoppingBag: () => void;
	onClickPick: () => void;
	onClickSubImage: (event: any) => void;
	mainImg: string;
}
