import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

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
	onClickRecomment?: (event: MouseEvent<HTMLImageElement>) => void;
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
	onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
