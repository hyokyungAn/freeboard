import { useQuery } from "@apollo/client";
import React, { MouseEvent, useState } from "react";
import BrandRecommentItemUI from "./BrandRecommentItem.presenter";
import { FETCH_USER_LOGGED_IN } from "./BrandRecommentItem.queries";
import { IBrandRecommentItemProps } from "./BrandRecommentItem.types";

export default function BrandRecommentItem(props: IBrandRecommentItemProps) {
	const [isAnswerEdit, setIsAnswerEdit] = useState(false);
	const [answerEditId, setAnswerEditId] = useState("");
	const { data } = useQuery(FETCH_USER_LOGGED_IN);
	const onClickUpdate = (event: MouseEvent<HTMLImageElement>) => {
		setIsAnswerEdit((prev) => !prev);
		setAnswerEditId(event.currentTarget.id);
	};

	return (
		<BrandRecommentItemUI
			refetch={props.refetch}
			onClickDelete={props.onClickDelete}
			el={props.el}
			data={data}
			onClickUpdate={onClickUpdate}
			isAnswerEdit={isAnswerEdit}
			answerEditId={answerEditId}
			setIsAnswerEdit={setIsAnswerEdit}
			setAnswerEditId={setAnswerEditId}
			recommentData={props.recommentData}
		/>
	);
}
