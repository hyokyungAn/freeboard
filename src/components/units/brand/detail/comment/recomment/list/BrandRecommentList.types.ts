import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

export interface IData {
	_id: string;
	contents: string;
	createdAt: Date;
	user: {
		email: string;
		_id: string;
		name: string;
	};
}

export interface IBrandRecommentListProps {
	el: IFetchUseditemsQuestions;
}

export interface IBrandRecommentListUIProps {
	recommentData: {
		fetchUseditemQuestionAnswers: Array<IData>;
	};
	refetch(
		variables?: Partial<{ useditemQuestionId: string }> | undefined
	): Promise<ApolloQueryResult<Array<IData>>>;
	onClickDelete: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IFetchUseditemsQuestions {
	_id: string;
	contents: string;
	createdAt: Date;
	user: {
		email: string;
		_id: string;
		name: string;
	};
}
