import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

export interface IBrandMainUIProps {
	data?: any;
	pickList?: any;
	fetchMore?: any;
	bestData?: any;
	loadFunc: any;
	loadFuncPick: any;
	onClickMoveToBrandCreate: () => void;
	onClickMoveToBrandDetail: (
		el: any
	) => (event: MouseEvent<HTMLDivElement>) => void;
	refetch(
		variables?: Partial<OperationVariables> | undefined
	): Promise<ApolloQueryResult<any>>;
	keyword: string;
	onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
	isMatched: boolean;
}
