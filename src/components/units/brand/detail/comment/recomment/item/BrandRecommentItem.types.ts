import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { Dispatch, MouseEvent, SetStateAction } from "react";

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
	refetch?: (
		variables?: Partial<{ useditemQuestionId: string }> | undefined
	) => Promise<ApolloQueryResult<Array<IData>>>;
	onClickDelete?: (event: MouseEvent<HTMLImageElement>) => void;
	el?: IData;
	recommentData?: {
		fetchUseditemQuestionAnswers: Array<IData>;
	};
}
export interface IBrandRecommentItemUIProps {
	el?: IData;
	data: {
		fetchUserLoggedIn: {
			_id: string;
		};
	};
	refetch?: (
		variables?: Partial<{ useditemQuestionId: string }> | undefined
	) => Promise<ApolloQueryResult<IData[]>>;
	onClickDelete?: (event: MouseEvent<HTMLImageElement>) => void;
	onClickUpdate: (event: MouseEvent<HTMLImageElement>) => void;
	isAnswerEdit: boolean;
	answerEditId: string;
	setIsAnswerEdit: Dispatch<SetStateAction<boolean>>;
	setAnswerEditId: Dispatch<SetStateAction<string>>;
	recommentData?: {
		fetchUseditemQuestionAnswers: Array<IData>;
	};
}
