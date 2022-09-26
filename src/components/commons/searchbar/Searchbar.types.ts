import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";

export interface ISearchbarProps {
	refetch: (
		variables?: Partial<{ search: string; page: number }> | undefined
	) => Promise<ApolloQueryResult<IFetchUseditems[]>>;
	onChangeKeyword: (value: string) => void;
}

export interface ISearchbarUIProps {
	onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
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
