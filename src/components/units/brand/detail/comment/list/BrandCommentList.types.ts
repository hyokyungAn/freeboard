import { MouseEvent } from "react";

export interface IBrandCommentListUIProps {
	data?: any;
	loadFunc: any;
	onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
}
