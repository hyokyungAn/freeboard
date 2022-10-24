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

export const Logo = styled.div`
	width: 21%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const InnerLogo = styled.img`
	cursor: pointer;
	width: 180px;
`;

export const Text = styled.div`
	display: flex;
	font-weight: bold;
`;

export const InnerText = styled.div`
	padding-top: 10px;
	font-weight: bold;
`;

export const ButtonWrapper = styled.div``;

export const InnerButton = styled.span`
	margin: 10px;
	cursor: pointer;
`;
