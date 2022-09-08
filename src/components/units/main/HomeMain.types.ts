import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

export interface IHomeMainUIProps {
	data?: any;
	// onClickMoveToBrandDetail: (event: MouseEvent<HTMLDivElement>) => void;
	// today: any;
}

export interface ITextTokenProps {
	isMatched: boolean;
}
