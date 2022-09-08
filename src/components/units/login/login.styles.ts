import styled from "@emotion/styled";

export const Wrapper = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.div`
	padding: 50px;
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
	display: flex;
	padding: 100px;
`;

export const Inner = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 15px;
	/* margin-bottom: 30px; */
	/* position: relative; */
	/* :last-of-type {
		margin-bottom: 0;
	} */
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

export const LoginButtonWrapper = styled.div`
	width: 200px;
	height: 150px;
	padding: 15px;
`;

export const LoginButton = styled.button`
	width: 100%;
	height: 100%;
	background-color: ${(props) => (props.isActive ? "black" : "White")};
	color: ${(props) => (props.isActive ? "White" : "black")};
`;
