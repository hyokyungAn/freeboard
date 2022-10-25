import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
	return (
		// <S.Body>
		<S.Wrapper>
			<S.Subject>게시글 등록</S.Subject>
			<S.Line />

			<S.InputWrapper>
				<S.Label>제목</S.Label>
				<S.Title
					type="text"
					placeholder="제목을 작성해주세요."
					onChange={props.onChangeTitle}
				/>
			</S.InputWrapper>
			<S.Error>{props.titleError}</S.Error>
			<S.InputWrapper>
				<S.Label>내용</S.Label>
				<S.Contents
					type="text"
					placeholder="내용을 작성해주세요."
					onChange={props.onChangeContents}
				/>
				<S.Error>{props.contentsError}</S.Error>
			</S.InputWrapper>
			<S.InputWrapper>
				<S.Label>유튜브</S.Label>
				<S.Youtube placeholder="링크를 복사해주세요." />
			</S.InputWrapper>
			<S.ImageWrapper>
				<S.Label>사진첨부</S.Label>
				<S.UploadButton>+</S.UploadButton>
				<S.UploadButton>+</S.UploadButton>
				<S.UploadButton>+</S.UploadButton>
			</S.ImageWrapper>
			<S.OptionWrapper>
				<S.Label>메인설정</S.Label>
				<S.RadioButton type="radio" id="youtube" name="radio-button" />
				<S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
				<S.RadioButton type="radio" id="image" name="radio-button" />
				<S.RadioLabel htmlFor="image">사진</S.RadioLabel>
			</S.OptionWrapper>
			<S.WriterPasswordWrapper>
				<S.InputWrapper>
					<S.Label>작성자</S.Label>
					<S.Writer
						type="text"
						placeholder="이름을 적어주세요."
						onChange={props.onChangeWriter}
					/>
					<S.Error>{props.writerError}</S.Error>
				</S.InputWrapper>
				<S.InputWrapper>
					<S.Label>비밀번호</S.Label>
					<S.Password
						type="password"
						placeholder="비밀번호를 입력해주세요."
						onChange={props.onChangePassword}
					/>
					<S.Error>{props.passwordError}</S.Error>
				</S.InputWrapper>
			</S.WriterPasswordWrapper>
			<S.ButtonWrapper>
				<S.Button onClick={props.onClickSubmit} isActive={props.isActive}>
					등록하기
				</S.Button>
			</S.ButtonWrapper>
		</S.Wrapper>
		// </S.Body>
	);
}
