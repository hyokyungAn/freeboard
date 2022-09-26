import { MouseEvent } from "react";

export interface IBrandCommentListUIProps {
	data?: {
		fetchUseditemQuestions: IFetchUseditemsQuestions[];
	};
	loadFunc: () => void;
	onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
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
