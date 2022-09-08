import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const InnerWrapper = styled.div`
	width: 100%;
	padding: 0 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const InnerLogo = styled.img`
	cursor: pointer;
`;

export const InnerButton = styled.span`
	margin: 10px;
	cursor: pointer;
`;
