import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

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

export interface IBrandRecommentItemProps {
	refetch?(
		variables?: Partial<{ useditemQuestionId: string }> | undefined
	): Promise<ApolloQueryResult<Array<IData>>>;
	onClickDelete?: (event: any) => void;
	el?: IData;
	recommentData?: {
		fetchUseditemQuestionAnswers: Array<IData>;
	};
}
export interface IBrandRecommentItemUIProps {
	key: any;
	el: any;
	data?: any;
	refetch?(
		variables?: Partial<OperationVariables> | undefined
	): Promise<ApolloQueryResult<any>>;
	onClickDelete?: (event: any) => void;
	onClickUpdate: (event: any) => void;
	isAnswerEdit: boolean;
	answerEditId: string;
	setIsAnswerEdit: Dispatch<SetStateAction<boolean>>;
	setAnswerEditId: Dispatch<SetStateAction<string>>;
	recommentData?: {
		fetchUseditemQuestionAnswers: Array<IData>;
	};
}
