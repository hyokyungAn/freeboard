import * as S from "./BoardDetail.styles";

export default function BoardDetailUI() {
	return (
		<S.Wrapper>
			<S.InnerWrapper>
				<S.ProfileWrapper>
					<S.Profile src="/images/avatar.png" />
					<S.Info>
						<S.Writer></S.Writer>
						<S.CreatedAt></S.CreatedAt>
					</S.Info>
				</S.ProfileWrapper>
				<S.ContentsWrapper>
					<S.Title></S.Title>
					<S.Contents></S.Contents>
				</S.ContentsWrapper>
			</S.InnerWrapper>
			<S.ButtonWrapper>
				<S.Button>목록으로</S.Button>
				<S.Button>수정하기</S.Button>
				<S.Button>삭제하기</S.Button>
			</S.ButtonWrapper>
		</S.Wrapper>
	);
}
