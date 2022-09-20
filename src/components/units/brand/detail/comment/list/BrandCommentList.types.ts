export interface IBrandCommentListProps {
	data?: any;
	onClickDelete?: () => void;
}

export interface IBrandCommentListUIProps {
	data?: any;
	loadFunc: any;
	onClickDelete: (event: any) => void;
}
