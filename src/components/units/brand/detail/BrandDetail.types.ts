export interface IBrandDetailProps {
	// onClickMoveToMarketList: () => void;
	// onClickMoveToMarketEdit: () => void;
	// onClickDelete: () => void;
	el?: any;
	pickList?: any;
}

export interface IBrandDetailUIProps {
	data?: any;
	el: any;
	index: any;
	isActive: boolean;
	onClickPick: () => void;
	onClickShoppingBag: () => void;
	onClickBuy: () => void;
}
