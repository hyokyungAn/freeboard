import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

export interface IBrandRecommentWriteProps {
	el: any;
	refetch(
		variables?: Partial<OperationVariables> | undefined
	): Promise<ApolloQueryResult<any>>;
	setIsAnswer?: Dispatch<SetStateAction<boolean>>;
	setIsAnswerEdit?: Dispatch<SetStateAction<boolean>>;
	isAnswer?: boolean;
	isAnswerEdit?: boolean;
	answerId?: string;
	answerEditId?: string;
	firstId?: string;
	recommentData?: any;
	onClickRecomment?: (event: any) => void;
}

export interface IBrandRecommentWriteUIProps {
	el?: any;
	isAnswer?: boolean;
	isAnswerEdit?: boolean;
	contents: any;
	onClickAnswer: () => void;
	onClickAnswerUpdate: (data: any) => void;
	onClickCancel: () => void;
	onClickBackButtonEdit: () => void;
	onChangeComment: (event: any) => void;
}
