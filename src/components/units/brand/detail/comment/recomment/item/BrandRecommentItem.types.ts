import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

export interface IBrandRecommentItemProps {
	refetch(
		variables?: Partial<OperationVariables> | undefined
	): Promise<ApolloQueryResult<any>>;
	onClickDelete: () => void;
	el?: any;
	recommentData: any;
}
export interface IBrandRecommentItemUIProps {
	refetch(
		variables?: Partial<OperationVariables> | undefined
	): Promise<ApolloQueryResult<any>>;
	onClickDelete: () => void;
	onClickEdit: (event: any) => void;
	el?: any;
	isAnswerEdit: boolean;
	answerEditId: string;
	setIsAnswerEdit: Dispatch<SetStateAction<boolean>>;
	setAnswerEditId: Dispatch<SetStateAction<string>>;
	recommentData: string;
}
