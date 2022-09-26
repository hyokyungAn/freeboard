import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface IBrandRecommentWriteProps {
	el?: IData;
	refetch?: (
		variables?: Partial<{ useditemQuestionId: string }> | undefined
	) => Promise<ApolloQueryResult<Array<IData>>>;
	setIsAnswer?: Dispatch<SetStateAction<boolean>>;
	setIsAnswerEdit?: Dispatch<SetStateAction<boolean>>;
	isAnswer?: boolean;
	isAnswerEdit?: boolean;
	answerId?: string;
	answerEditId?: string;
	firstId?: string;
	onClickRecomment?: (event: MouseEvent<HTMLImageElement>) => void;
}

export interface IBrandRecommentWriteUIProps {
	el?: IData;
	isAnswer?: boolean;
	isAnswerEdit?: boolean;
	contents: string;
	onClickAnswer: () => void;
	onClickAnswerUpdate: () => void;
	onClickCancel: () => void;
	onClickBackButtonEdit: () => void;
	onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

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
