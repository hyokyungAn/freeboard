import { Dispatch, SetStateAction } from "react";

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
	onChangeComment: (event: any) => void;
	formRef: any;
	contents: any;
}
