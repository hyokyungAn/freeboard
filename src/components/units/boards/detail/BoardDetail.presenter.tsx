import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
	return (
		<S.Wrapper>
			<S.InnerWrapper>
				<S.Title>{props.data?.fetchBoard?.title}</S.Title>
				<S.ProfileWrapper>
					<S.Profile src="/images/profile.png" />
					<S.Info>
						<S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
						<S.CreatedAt>
							{getDate(props.data?.fetchBoard?.createdAt)}
						</S.CreatedAt>
					</S.Info>
				</S.ProfileWrapper>
				<S.ContentsWrapper>
					<S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
					<S.ImageWrapper>
						<S.Image />
					</S.ImageWrapper>
				</S.ContentsWrapper>
			</S.InnerWrapper>
			<S.ButtonWrapper>
				<S.Button onClick={props.onClickMoveToBoardList}>글목록</S.Button>
				<S.Button onClick={props.onClickMoveToBoardEdit}>수정</S.Button>
				<S.Button>삭제</S.Button>
			</S.ButtonWrapper>
		</S.Wrapper>
	);
}
