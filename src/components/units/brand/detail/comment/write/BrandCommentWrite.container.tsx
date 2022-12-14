import { useMutation } from "@apollo/client";
import {
	CREATE_USED_ITEM_QUESTION,
	FETCH_USED_ITEM_QUESTIONS,
	UPDATE_USED_ITEM_QUESTION,
} from "./BrandCommentWrite.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IBrandCommentWriteProps } from "./BrandCommentWrite.types";
import BrandCommentWriteUI from "./BrandCommentWrite.presenter";
import { ChangeEvent, useRef, useState } from "react";

export default function BrandCommentWrite(props: IBrandCommentWriteProps) {
	const [contents, setContents] = useState("");
	const router = useRouter();
	const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
	const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
	const formRef = useRef<HTMLInputElement>(null);

	const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setContents(event.target.value);
	};

	const onClickWrite = async () => {
		try {
			await createUseditemQuestion({
				variables: {
					createUseditemQuestionInput: {
						contents,
					},
					useditemId: router.query.useditemId,
				},
				refetchQueries: [
					{
						query: FETCH_USED_ITEM_QUESTIONS,
						variables: { useditemId: router.query.useditemId },
					},
				],
			});
			Modal.success({ content: "댓글이 등록되었습니다!" });
			if (formRef.current) formRef.current.value = "";
			// formRef.current.reset()
		} catch (error) {
			Modal.error({ content: (error as Error).message });
		}
	};

	const onClickUpdate = async () => {
		if (!contents) {
			Modal.error({ content: "수정된 내용이 없습니다." });
			return;
		}
		try {
			await updateUseditemQuestion({
				variables: {
					updateUseditemQuestionInput: {
						contents,
					},
					useditemQuestionId: props.editId,
				},
				refetchQueries: [
					{
						query: FETCH_USED_ITEM_QUESTIONS,
						variables: { useditemId: router.query.useditemId },
					},
				],
			});
			props.setIsEdit?.(false);
			Modal.success({ content: "수정이 완료되었습니다!" });
		} catch (error) {
			Modal.error({ content: (error as Error).message });
		}
	};

	const onClickCancel = () => {
		props.setIsEdit?.(false);
	};

	return (
		<BrandCommentWriteUI
			onClickWrite={onClickWrite}
			onClickUpdate={onClickUpdate}
			onClickCancel={onClickCancel}
			onChangeComment={onChangeComment}
			isEdit={props.isEdit}
			el={props.el}
			contents={contents}
			formRef={formRef}
		/>
	);
}
