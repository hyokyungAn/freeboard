import * as S from "./BoardDetail.styles";

export default function BoardDetailUI() {
	return (
		<S.Wrapper>
			<S.InnerWrapper>
				<S.Title>글 제목</S.Title>
				<S.ProfileWrapper>
					<S.Profile src="/images/profile.png" />
					<S.Info>
						<S.Writer></S.Writer>
						<S.CreatedAt></S.CreatedAt>
					</S.Info>
				</S.ProfileWrapper>
				<S.ContentsWrapper>
					<S.Contents></S.Contents>
					<S.ImageWrapper>
						<S.Image />
					</S.ImageWrapper>
				</S.ContentsWrapper>
			</S.InnerWrapper>
			<S.ButtonWrapper>
				<S.Button>글목록</S.Button>
				<S.Button>수정</S.Button>
				<S.Button>삭제</S.Button>
			</S.ButtonWrapper>
		</S.Wrapper>
	);
}
