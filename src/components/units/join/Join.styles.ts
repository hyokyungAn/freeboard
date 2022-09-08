import styled from "@emotion/styled";

export const Wrapper = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h2`
	width: 100%;
	margin-bottom: 0;
	padding: 50px 0;
	text-align: center;
	font-size: 30px;
	font-family: "Noto Sans KR";
`;

export const line = styled.div`
	width: calc(100% - 20%);
	padding: 0 30px;
	border: 1px solid #555555;
`;

export const InnerWrapper = styled.div`
	max-width: 1000px;
	width: 100%;
	padding: 100px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Inner = styled.div`
	max-width: 600px;
	width: 100%;
`;

export const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
	position: relative;
	:last-of-type {
		margin-bottom: 0;
	}
`;

export const InputErrorWrapper = styled.div`
	width: 100%;
`;

export const ButtonWrapper = styled.div`
	width: 22%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	text-align: center;
	margin: 0 auto;
	padding: 50px 0;
`;

export const Error = styled.div`
	color: red;
	font-size: 10px;
	position: absolute;
	bottom: -22px;
`;

export const Text = styled.div`
	width: 170px;
`;
