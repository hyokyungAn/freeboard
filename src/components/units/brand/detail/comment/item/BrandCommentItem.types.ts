import { Dispatch, SetStateAction } from "react";

export interface IBrandCommentItemProps {
	el: any;
	onClickDelete: () => void;
	onClickRecomment: (event: any) => void;
}

export interface IBrandCommentItemUIProps {
	data: any;
	el: any;
	isEdit: boolean;
	editId: string;
	isAnswer: boolean;
	answerId: string;
	setIsEdit: Dispatch<SetStateAction<boolean>>;
	setEditId: Dispatch<SetStateAction<string>>;
	setIsAnswer: Dispatch<SetStateAction<boolean>>;
	onClickUpdate: (event: any) => void;
	onClickDelete: () => void;
	onClickRecomment: (event: any) => void;
}
