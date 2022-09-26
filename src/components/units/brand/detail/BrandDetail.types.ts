import { MouseEvent } from "react";

export interface IBrandDetailProps {
	pickList?: {
		fetchUseditemsIPicked: IFetchUseditemsIPicked[];
	};
}

export interface IBrandDetailUIProps {
	data: {
		fetchUseditem: IFetchUseditem;
	};
	isActive: boolean;
	onClickBuy: () => void;
	onclickEdit: () => void;
	onClickDelete: () => void;
	onClickShoppingBag: () => void;
	onClickPick: () => void;
	onClickSubImage: (event: MouseEvent<HTMLImageElement>) => void;
	mainImg: string;
}

export interface IFetchUseditemsIPicked {
	_id: string;
	pickedCount: number;
}

export interface IFetchUseditem {
	_id: string;
	seller: {
		name: string;
	};
	name: string;
	remarks: string;
	contents: string;
	price: number;
	images: string[];
	pickedCount: number;
	tags: string[];
	useditemAddress: {
		address: string;
		addressDetail: string;
		lat: string;
		lng: string;
	};
}

export interface IBasket {
	contents?: string;
	images?: string[];
	name?: string;
	pickedCount?: number;
	price?: number;
	remarks?: string;
	_id?: string;
}
