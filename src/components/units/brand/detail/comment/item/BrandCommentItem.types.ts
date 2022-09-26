import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IBrandCommentItemProps {
	el: IFetchUseditemsQuestions;
	onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
	onClickRecomment?: (event: MouseEvent<HTMLImageElement>) => void;
}

export interface IBrandCommentItemUIProps {
	data: {
		fetchUserLoggedIn: IFetchUserLoggedIn;
	};
	el: IFetchUseditemsQuestions;
	isEdit: boolean;
	editId: string;
	isAnswer: boolean;
	answerId: string;
	setIsEdit: Dispatch<SetStateAction<boolean>>;
	setEditId: Dispatch<SetStateAction<string>>;
	setIsAnswer: Dispatch<SetStateAction<boolean>>;
	onClickUpdate: (event: MouseEvent<HTMLImageElement>) => void;
	onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
	onClickRecomment: (event: MouseEvent<HTMLImageElement>) => void;
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

export interface IFetchUserLoggedIn {
	_id: string;
	email: string;
	name: string;
}
