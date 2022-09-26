import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
	CREATE_USED_ITEM_QUESTION_ANSWER,
	UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./BrandRecommentWrite.queries";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../list/BrandRecommentList.queries";
import { IBrandRecommentWriteProps } from "./BrandRecommentWrite.types";
import BrandRecommentWriteUI from "./BrandRecommentWrite.presenter";
import { ChangeEvent, useState } from "react";

export default function BrandRecommentWrite(props: IBrandRecommentWriteProps) {
	const [contents, setContents] = useState("");

	const [createUseditemQuestionAnswer] = useMutation(
		CREATE_USED_ITEM_QUESTION_ANSWER
	);

	const [updateUseditemQuestionAnswer] = useMutation(
		UPDATE_USED_ITEM_QUESTION_ANSWER
	);

	const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setContents(event.target.value);
	};

	const onClickAnswer = async () => {
		try {
			const result = await createUseditemQuestionAnswer({
				variables: {
					createUseditemQuestionAnswerInput: {
						contents,
					},
					useditemQuestionId: props.answerId,
				},

				refetchQueries: [
					{
						query: FETCH_USED_ITEM_QUESTION_ANSWERS,
						variables: { useditemQuestionId: props.answerId },
					},
				],
			});

			Modal.success({ content: "답변이 등록되었습니다." });
		} catch (error) {
			Modal.error({ content: (error as Error).message });
		}
		if (props.setIsAnswer) props.setIsAnswer((prev: boolean) => !prev);
	};

	const onClickAnswerUpdate = async () => {
		if (!contents) {
			Modal.error({ content: "수정된 내용이 없습니다." });
			return;
		}
		try {
			await updateUseditemQuestionAnswer({
				variables: {
					updateUseditemQuestionAnswerInput: {
						contents,
					},
					useditemQuestionAnswerId: props.answerEditId,
				},
			});
			if (props.refetch) props.refetch();
			if (props.setIsAnswerEdit)
				props.setIsAnswerEdit((prev: boolean) => !prev);
			Modal.success({ content: "답글이 수정 되었습니다!" });
		} catch (error) {
			Modal.error({ content: (error as Error).message });
		}
	};

	const onClickCancel = () => {
		if (props.setIsAnswer) props.setIsAnswer(false);
	};

	const onClickBackButtonEdit = () => {
		if (props.setIsAnswerEdit) props.setIsAnswerEdit(false);
	};

	return (
		<BrandRecommentWriteUI
			el={props.el}
			onClickAnswer={onClickAnswer}
			onClickAnswerUpdate={onClickAnswerUpdate}
			isAnswer={props.isAnswer}
			onClickCancel={onClickCancel}
			isAnswerEdit={props.isAnswerEdit}
			onClickBackButtonEdit={onClickBackButtonEdit}
			onChangeComment={onChangeComment}
			contents={contents}
		/>
	);
}
