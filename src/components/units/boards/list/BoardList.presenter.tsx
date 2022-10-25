import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
	const getDate = (value) => {
		const date = new Date(value);
		const yyyy = date.getFullYear();
		const mm = String(date.getMonth() + 1).padStart(2, "0");
		const dd = String(date.getDate()).padStart(2, "0");
		return `${yyyy}-${mm}-${dd}`;
	};

	return (
		<S.Wrapper>
			<S.TopLine />
			<S.RowList>
				<S.ListHeaderMenu>ID</S.ListHeaderMenu>
				<S.ListHeaderTitle>제목</S.ListHeaderTitle>
				<S.ListHeaderMenu>작성자</S.ListHeaderMenu>
				<S.ListHeaderMenu>날짜</S.ListHeaderMenu>
			</S.RowList>
			{props.data?.fetchBoards.map((el) => (
				<S.RowList key={el._id}>
					<S.ListMenu>{String(el._id).slice(-4).toUpperCase()}</S.ListMenu>
					<S.ListTitle onClick={props.onClickMoveToBoardDetail}>
						{el.title}
					</S.ListTitle>
					<S.ListMenu>{el.writer}</S.ListMenu>
					<S.ListMenu>{getDate(el.createdAt)}</S.ListMenu>
				</S.RowList>
			))}
			<S.BottomLine />
			<S.ButtonWrapper>
				<S.WriteIcon src="/images/write.png" />
				<S.Button onClick={props.onClickMoveToBoardWrite}>
					게시물 등록하기
				</S.Button>
			</S.ButtonWrapper>
		</S.Wrapper>
	);
}
