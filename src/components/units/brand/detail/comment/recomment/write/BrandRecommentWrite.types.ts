import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBrandRecommentWriteProps {
	el?: any;
	refetch?: any;
	setIsAnswer?: Dispatch<SetStateAction<boolean>>;
	setIsAnswerEdit?: Dispatch<SetStateAction<boolean>>;
	isAnswer?: boolean;
	isAnswerEdit?: boolean;
	answerId?: string;
	answerEditId?: string;
	firstId?: string;
	recommentData?: any;
	onClickRecomment?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IBrandRecommentWriteUIProps {
	el?: any;
	isAnswer?: boolean;
	isAnswerEdit?: boolean;
	contents: string;
	onClickAnswer: () => void;
	onClickAnswerUpdate: (data: any) => void;
	onClickCancel: () => void;
	onClickBackButtonEdit: () => void;
	onChangeComment: (event: any) => void;
}
