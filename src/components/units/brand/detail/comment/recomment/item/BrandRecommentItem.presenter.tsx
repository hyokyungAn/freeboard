import React from "react";
import { getDate } from "../../../../../../../commons/libraries/utils";
import * as S from "./BrandRecommentItem.styles";
import BrandRecommentWrite from "../write/BrandRecommentWrite.container";
import { IBrandRecommentItemUIProps } from "./BrandRecommentItem.types";

export default function BrandRecommentItemUI(
	props: IBrandRecommentItemUIProps
) {
	return (
		<S.Wrapper>
			{props.isAnswerEdit === false && (
				<S.RecommentWrapper>
					<S.TitleIconWrapper>
						<S.Title>{props.isAnswerEdit ? "답변 수정" : "답변"}</S.Title>
						<S.IconWrapper>
							{props.el?.user._id === props.data?.fetchUserLoggedIn._id ? (
								<></>
							) : (
								<>
									<S.EditIcon
										src="/images/edit.png"
										onClick={props.onClickUpdate}
										id={props.el._id}
									/>
									<S.DeleteIcon
										src="/images/delete.png"
										onClick={props.onClickDelete}
										id={props.el._id}
									/>
								</>
							)}
						</S.IconWrapper>
					</S.TitleIconWrapper>
					<S.Date>{getDate(props.el.createdAt)}</S.Date>
					<S.Contents>{props.el.contents}</S.Contents>
				</S.RecommentWrapper>
			)}

			{props.isAnswerEdit === true && (
				<BrandRecommentWrite
					refetch={props.refetch}
					isAnswerEdit={props.isAnswerEdit}
					setIsAnswerEdit={props.setIsAnswerEdit}
					answerEditId={props.answerEditId}
					firstId={props.el._id}
					el={props.el}
					recommentData={props.recommentData}
				/>
			)}
		</S.Wrapper>
	);
}
