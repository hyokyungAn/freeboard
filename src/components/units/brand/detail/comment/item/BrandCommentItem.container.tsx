import { useQuery } from "@apollo/client";
import { useState } from "react";
import BrandCommentItemUI from "./BrandCommentItem.presenter";
import { FETCH_USER_LOGGED_IN } from "./BrandCommentItem.queries";
import { IBrandCommentItemProps } from "./BrandCommentItem.types";

export default function BrandCommentItem(props: IBrandCommentItemProps) {
	const { data } = useQuery(FETCH_USER_LOGGED_IN);
	const [isEdit, setIsEdit] = useState(false);
	const [editId, setEditId] = useState("");
	const [isAnswer, setIsAnswer] = useState(false);
	const [answerId, setAnswerId] = useState("");

	const onClickUpdate = (event: any) => {
		setIsEdit((prev) => !prev);
		setEditId(event.target.id);
	};

	const onClickRecomment = (event: any) => {
		setIsAnswer((prev) => !prev);
		setAnswerId(event.target.id);
	};

	return (
		<BrandCommentItemUI
			data={data}
			setIsEdit={setIsEdit}
			onClickUpdate={onClickUpdate}
			el={props.el}
			onClickDelete={props.onClickDelete}
			isEdit={isEdit}
			editId={editId}
			setEditId={setEditId}
			onClickRecomment={onClickRecomment}
			isAnswer={isAnswer}
			answerId={answerId}
			setIsAnswer={setIsAnswer}
		/>
	);
}
