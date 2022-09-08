import styled from "@emotion/styled";

export const Wrapper = styled.div`
	height: 64px;
	background-color: #000;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	color: white;
`;

export const InnerLogo = styled.img`
	cursor: pointer;
`;

export const InnerButton = styled.span`
	margin: 30px;
	cursor: pointer;
`;

export const MenuItem = styled.div`
	font-family: "Noto Sans KR";
	font-style: normal;
	font-weight: 700;
	margin: 0px 55px;
	cursor: pointer;

	:hover {
		color: orange;
	}
`;

export const MenuDivide = styled.div`
	font-weight: 700;
	margin: 0px 55px;
`;
