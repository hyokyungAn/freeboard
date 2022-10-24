import styled from "@emotion/styled";

export const Wrapper = styled.div`
	height: 64px;
	/* background-color: #000; */
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	color: #000;
	border-top: solid 1px #000;
`;

export const MenuItem = styled.div`
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
