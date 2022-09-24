import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBrandCommentWriteProps {
	setIsEdit?: Dispatch<SetStateAction<boolean>>;
	isEdit?: boolean;
	editId?: string;
	el?: any;
}

export interface IBrandCommentWriteUIProps {
	isEdit?: boolean;
	el?: any;
	onClickUpdate: () => void;
	onClickWrite: () => void;
	onClickCancel: () => void;
	onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	formRef: any;
	contents: any;
}
