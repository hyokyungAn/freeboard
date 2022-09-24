import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import BrandCommentListUI from "./BrandCommentList.presenter";
import {
	DELETE_USED_ITEM_QUESTION,
	FETCH_USED_ITEM_QUESTIONS,
} from "./BrandCommentList.queries";

export default function BrandCommentList() {
	const router = useRouter();
	const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
		variables: { useditemId: router.query.useditemId },
	});
	const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

	const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
		try {
			await deleteUseditemQuestion({
				variables: {
					useditemQuestionId: event.currentTarget.id,
				},
				refetchQueries: [
					{
						query: FETCH_USED_ITEM_QUESTIONS,
						variables: { useditemId: router.query.useditemId },
					},
				],
			});
			Modal.success({ content: "댓글이 삭제 되었습니다!" });
		} catch (error) {
			Modal.error({ content: (error as Error).message });
		}
	};

	const loadFunc = () => {
		if (!data) return;
		fetchMore({
			// 더 받아옴
			variables: {
				page: Math.ceil(data.fetchUseditemQuestions.length / 10) + 1,
			}, // 한 페이지당 10개 다음페이지 까지 불러 와야 하기 때문에 + 1 해준다.
			// fetchMoreResult = 11~20  prev는 1~10
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult?.fetchUseditemQuestions)
					return {
						fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
					};

				return {
					fetchUseditemQuestions: [
						...prev.fetchUseditemQuestions, // 기존꺼 10개
						...fetchMoreResult.fetchUseditemQuestions, // 다음꺼 10개
					],
				};
			},
		});
	};

	return (
		<BrandCommentListUI
			data={data}
			onClickDelete={onClickDelete}
			loadFunc={loadFunc}
		/>
	);
}
