import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	max-width: 850px;
	padding: 50px 0;
`;
export const TopLine = styled.div`
	border-top: 1px solid gray;
`;
export const RowList = styled.div`
	display: flex;
	flex-direction: row;
	text-align: center;
	border-bottom: 1px solid gray;
`;
export const ListHeaderMenu = styled.div`
	width: 15%;
	text-align: center;
`;
export const ListHeaderTitle = styled.div`
	width: 55%;
	text-align: center;
`;
export const ListMenu = styled.div`
	width: 15%;
	text-align: center;
`;
export const ListTitle = styled.div`
	width: 55%;
	text-align: center;
	cursor: pointer;

	:hover {
		color: blueviolet;
	}
`;

export const BottomLine = styled.div`
	border-top: 2px solid gray;
	padding-bottom: 30px;
`;
export const ButtonWrapper = styled.div`
	width: 15%;
	border: 1px solid #000;
	border-radius: 5px;
	text-align: center;
`;
export const WriteIcon = styled.img`
	width: 14px;
	height: 14px;
`;
export const Button = styled.button`
	background-color: white;
	border: none;
	cursor: pointer;
`;
