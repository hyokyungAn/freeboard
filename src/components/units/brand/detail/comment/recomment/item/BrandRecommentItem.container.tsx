import React, { useState } from "react";
import BrandRecommentItemUI from "./BrandRecommentItem.presenter";
import { IBrandRecommentItemProps } from "./BrandRecommentItem.types";

export default function BrandRecommentItem(props: IBrandRecommentItemProps) {
	const [isAnswerEdit, setIsAnswerEdit] = useState(false);
	const [answerEditId, setAnswerEditId] = useState("");

	const onClickUpdate = (event: any) => {
		setIsAnswerEdit((prev) => !prev);
		setAnswerEditId(event.target.id);
	};

	return (
		<BrandRecommentItemUI
			refetch={props.refetch}
			onClickDelete={props.onClickDelete}
			key={props.el?._id}
			el={props.el}
			onClickUpdate={onClickUpdate}
			isAnswerEdit={isAnswerEdit}
			answerEditId={answerEditId}
			setIsAnswerEdit={setIsAnswerEdit}
			setAnswerEditId={setAnswerEditId}
			recommentData={props.recommentData}
		/>
	);
}
