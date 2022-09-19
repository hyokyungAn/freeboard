import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import React from "react";
import BrandRecommentListUI from "./BrandRecommentList.presenter";
import {
	DELETE_USED_QUESTION_ANSWER,
	FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./BrandRecommentList.queries";
import { IBrandRecommentListProps } from "./BrandRecommentList.types";

export default function BrandRecommentList(props: IBrandRecommentListProps) {
	const { data: recommentData, refetch } = useQuery(
		FETCH_USED_ITEM_QUESTION_ANSWERS,
		{
			variables: { useditemQuestionId: props.el._id },
		}
	);

	const [deleteUseditemQuestionAnswer] = useMutation(
		DELETE_USED_QUESTION_ANSWER
	);

	const onClickDelete = async (event: any) => {
		try {
			await deleteUseditemQuestionAnswer({
				variables: {
					useditemQuestionAnswerId: event.target.id,
				},
			});
			refetch();
			Modal.success({ content: "댓글이 삭제 되었습니다!" });
		} catch (error: any) {
			Modal.error({ content: error.message });
		}
	};

	return (
		<BrandRecommentListUI
			recommentData={recommentData}
			onClickDelete={onClickDelete}
			refetch={refetch}
		/>
	);
}
