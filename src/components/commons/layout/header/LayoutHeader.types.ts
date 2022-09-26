import { ApolloQueryResult } from "@apollo/client";

export interface IBasket {
	contents?: string;
	images?: string[];
	name?: string;
	pickedCount?: number;
	price?: number;
	remarks?: string;
	_id?: string;
}

export interface IFetchUserLoggedIn {
	name: string;
	userPoint: {
		amount: number;
	};
}

export interface ILayoutHeaderUIProps {
	data: {
		fetchUserLoggedIn: IFetchUserLoggedIn;
	};
	refetch: () => Promise<ApolloQueryResult<IFetchUserLoggedIn>>;
	basket: IBasket[];
	isModalVisible: boolean;
	handleCancel: () => void;
	pointCharge: () => void;
	onClickLogo: () => void;
	onClickMoveToLogin: () => void;
	onClickMoveTojoin: () => void;
	onClickLoggedOut: () => void;
}
