import DOMPurify from "dompurify";
import React from "react";
import BrandRecommentItem from "../item/BrandRecommentItem.container";
import * as S from "./BrandRecommentList.styles";
import { IBrandRecommentListUIProps } from "./BrandRecommentList.types";

export default function BrandRecommentListUI(
	props: IBrandRecommentListUIProps
) {
	return (
		<S.Wrapper>
			{props.recommentData?.fetchUseditemQuestionAnswers.map((el: any) => (
				<S.InnerWrapper key={el._id}>
					{typeof window !== "undefined" ? (
						<BrandRecommentItem
							refetch={props.refetch}
							key={el._id}
							onClickDelete={props.onClickDelete}
							el={el}
							recommentData={props.recommentData}
							dangerouslySetInnerHTML={{
								__html: DOMPurify.sanitize(
									props.recommentData?.fetchUseditemQuestionAnswers.contents
								),
							}}
						></BrandRecommentItem>
					) : (
						<BrandRecommentItem />
					)}
				</S.InnerWrapper>
			))}
		</S.Wrapper>
	);
}
