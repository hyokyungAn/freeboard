import React from "react";
import MediumButton from "../../../../../../commons/buttons/medium";
import * as S from "./BrandRecommentWrite.styles";
import { IBrandRecommentWriteUIProps } from "./BrandRecommentWrite.types";

export default function BrandRecommentWriteUI(
	props: IBrandRecommentWriteUIProps
) {
	return (
		<S.Wrapper>
			<S.WriteContent
				type="text"
				onChange={props.onChangeComment}
				placeholder="내용을 입력해주세요."
				defaultValue={props.el?.contents}
			/>

			<S.ButtonWrapper>
				<S.ButtonInnerWrapper>
					{props.isAnswer && (
						<MediumButton
							type="button"
							onClick={props.onClickCancel}
							title="취소하기"
						/>
					)}
					{props.isAnswerEdit && (
						<MediumButton
							type="button"
							onClick={props.onClickBackButtonEdit}
							title="취소하기"
						/>
					)}
					<MediumButton
						// type="button"
						isActive={true}
						title={props.isAnswerEdit ? "수정하기" : "등록하기"}
						onClick={
							props.isAnswerEdit
								? props.onClickAnswerUpdate
								: props.onClickAnswer
						}
					/>
				</S.ButtonInnerWrapper>
			</S.ButtonWrapper>
		</S.Wrapper>
	);
}
