import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

export interface IBrandMainUIProps {
	data?: any;
	bestData?: any;
	loadFunc: any;
	onClickMoveToBrandCreate: () => void;
	onClickMoveToBrandDetail: (
		el: any
	) => (event: MouseEvent<HTMLDivElement>) => void;
	onClickBrandDetail: (el: any) => (event: MouseEvent<HTMLDivElement>) => void;
	onClickSearch: () => void;
	refetch(
		variables?: Partial<OperationVariables> | undefined
	): Promise<ApolloQueryResult<any>>;
	keyword: string;
	onChangeKeyword: (value: string) => void;
	today: any;
}

export interface ITextTokenProps {
	isMatched: boolean;
}
