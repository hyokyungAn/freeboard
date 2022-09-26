import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface IBrandMainUIProps {
	data?: {
		fetchUseditems: IFetchUseditems[];
	};
	pickList: {
		fetchUseditemsIPicked: IFetchUseditemsIPicked[];
	};
	bestData?: {
		fetchUseditemsOfTheBest: IFetchUseditemsOfTheBest[];
	};
	loadFunc: () => void;
	loadFuncPick: () => void;
	onClickMoveToBrandCreate: () => void;
	refetch: (
		variables?: Partial<{ search: string; page: number }> | undefined
	) => Promise<ApolloQueryResult<IFetchUseditems[]>>;
	keyword: string;
	onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
	isMatched: boolean;
}

export interface IFetchUseditemsOfTheBest {
	_id: string;
	images: string[];
	name: string;
	price: number;
	tags: string[];
	contents: string;
	seller: {
		name: string;
	};
	useditemAddress: {
		address: string;
		addressDetail: string;
	};
	remarks: string;
	pickedCount: number;
	__typename: string;
}

export interface IFetchUseditems {
	_id: string;
	name: string;
	remarks: string;
	contents: string;
	price: number;
	seller: {
		name: string;
	};
	useditemAddress: {
		address: string;
		addressDetail: string;
	};
	images: string[];
	pickedCount: number;
	tags: string[];
	__typename: string;
}

export interface IFetchUseditemsIPicked {
	_id: string;
	pickedCount: number;
}
