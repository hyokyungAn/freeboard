import { ApolloQueryResult } from "@apollo/client";

export interface IBrandPointProps {
	handleCancel: () => void;
	refetch: () => Promise<ApolloQueryResult<IFetchUserLoggedIn>>;
}

export interface IBrandPointUIProps {
	selected: number;
	requestPay: () => void;
	handleCancel: () => void;
	onChangeAmount: (value: string) => void;
}

export interface IFetchUserLoggedIn {
	name: string;
	userPoint: {
		amount: number;
	};
}
