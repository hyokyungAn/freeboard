import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export const Text = styled.h1`
	padding-top: 80px;
	font-size: 22px;
`;

export const InnerWrapper = styled.div`
	width: 90%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	justify-items: center;
	padding-top: 80px;
`;
