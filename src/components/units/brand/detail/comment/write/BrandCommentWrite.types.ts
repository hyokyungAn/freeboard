import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBrandCommentWriteProps {
	setIsEdit?: Dispatch<SetStateAction<boolean>>;
	isEdit?: boolean;
	editId?: string;
	el?: IFetchUseditemsQuestions;
}

export interface IBrandCommentWriteUIProps {
	isEdit?: boolean;
	el?: IFetchUseditemsQuestions;
	onClickUpdate: () => void;
	onClickWrite: () => void;
	onClickCancel: () => void;
	onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	formRef: any;
	contents: string;
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
