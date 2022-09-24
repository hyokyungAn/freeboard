import * as S from "./BrandCommentWrite.styles";
import { IBrandCommentWriteUIProps } from "./BrandCommentWrite.types";

export default function BrandCommentWriteUI(props: IBrandCommentWriteUIProps) {
	return (
		<S.Wrapper>
			<S.WriteContent
				ref={props.formRef}
				maxLength={100}
				onChange={props.onChangeComment}
				placeholder="내용을 입력해 주세요.(최대 100자)"
				defaultValue={props.el?.contents}
			/>
			<S.ButtonWrapper>
				<S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
				{props.isEdit && (
					<S.Button
						onClick={props.onClickCancel}
						style={{ backgroundColor: "white", color: "black" }}
					>
						취소하기
					</S.Button>
				)}
				<S.Button
					style={{ backgroundColor: "black", color: "white" }}
					onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
				>
					{props.isEdit ? "수정하기" : "작성하기"}
				</S.Button>
			</S.ButtonWrapper>
			<S.ThinLine />
		</S.Wrapper>
	);
}
