import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IBrandCommentItemProps {
	el: any;
	onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
	onClickRecomment?: (event: MouseEvent<HTMLImageElement>) => void;
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
	onClickUpdate: (event: MouseEvent<HTMLImageElement>) => void;
	onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
	onClickRecomment: (event: MouseEvent<HTMLImageElement>) => void;
}
