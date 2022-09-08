import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	padding: 50px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const WriteContent = styled.textarea`
	width: 100%;
	height: 100px;
	padding: 30px 40px;
	background-color: #e9e9e9;
	border: none;
	outline: none;

	::placeholder {
		font-size: 14px;
		color: #a9a9a9;
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	padding: 15px 0;
`;

export const ContentsLength = styled.div`
	padding: 15px 0;
	color: gray;
`;

export const Button = styled.button`
	font-weight: 700;
	border: 1px solid #000;
	width: 150px;
	height: 55px;
	cursor: pointer;
	margin-left: 15px;
`;

export const ThinLine = styled.p`
	width: 100%;
	border-bottom: 1px solid #c0c0c0;
	margin-bottom: 0;
`;
