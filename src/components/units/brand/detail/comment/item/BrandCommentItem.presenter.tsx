import { useState } from "react";
import BrandRecommentWrite from "../recomment/write/BrandRecommentWrite.container";
import BrandCommentWrite from "../write/BrandCommentWrite.container";
import * as S from "../item/BrandCommentItem.styles";
import { IBrandCommentItemUIProps } from "./BrandCommentItem.types";
import { getDate } from "../../../../../../commons/libraries/utils";
import { Modal } from "antd";
import BrandRecommentList from "../recomment/list/BrandRecommentList.container";

export default function BrandCommentItemUI(props: IBrandCommentItemUIProps) {
	return (
		<S.Wrapper>
			{props.isEdit === false && (
				<>
					<S.CommentWrapper>
						<S.CommentWriterWrapper>
							<S.CommentWriter>{props.el.user.name}</S.CommentWriter>
						</S.CommentWriterWrapper>
						<S.CommentContents>
							<S.Contents>{props.el.contents}</S.Contents>
							<S.DateIconWrapper>
								<S.Date>{getDate(props.el.createdAt)}</S.Date>
								<S.IconWrapper>
									{props.el?.user._id === props.data?.fetchUserLoggedIn._id ? (
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
									) : (
										<>
											<S.RecommentIcon
												src="/images/recomment.png"
												onClick={props.onClickRecomment}
												id={props.el._id}
											/>
										</>
									)}
								</S.IconWrapper>
							</S.DateIconWrapper>
						</S.CommentContents>
					</S.CommentWrapper>
					<BrandRecommentList el={props.el} />
				</>
			)}

			{props.isEdit && (
				<BrandCommentWrite
					isEdit={props.isEdit}
					editId={props.editId}
					setIsEdit={props.setIsEdit}
					el={props.el}
				/>
			)}

			{props.isAnswer && (
				<BrandRecommentWrite
					setIsAnswer={props.setIsAnswer}
					isAnswer={props.isAnswer}
					answerId={props.answerId}
					onClickRecomment={props.onClickRecomment}
				/>
			)}
		</S.Wrapper>
	);
}
