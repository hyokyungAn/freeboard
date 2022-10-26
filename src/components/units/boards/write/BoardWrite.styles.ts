import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	max-width: 900px;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 50px;
	margin: 50px;
`;

export const Subject = styled.div`
	font-weight: 700;
	font-size: 22px;
	padding-bottom: 10px;
`;

export const Line = styled.div`
	border-bottom: 1px solid blueviolet;
	margin-bottom: 24px;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding-bottom: 20px;
`;

export const Label = styled.div`
	width: 120px;
	font-size: 14px;
`;

export const Title = styled.input`
	width: 100%;
	height: 30px;
	outline: none;
	border: 1px solid #bdbdbd;
	border-radius: 5px;
`;
export const Contents = styled.input`
	width: 100%;
	height: 100px;
	outline: none;
	border: 1px solid #bdbdbd;
	border-radius: 5px;
`;

export const Youtube = styled.input`
	width: 100%;
	height: 30px;
	outline: none;
	border: 1px solid #bdbdbd;
	border-radius: 5px;
`;

export const ImageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding-bottom: 20px;
`;

export const OptionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding-bottom: 20px;
`;

export const RadioButton = styled.input`
	cursor: pointer;
`;
export const RadioLabel = styled.label`
	padding-left: 10px;
	padding-right: 20px;
`;

export const UploadButton = styled.button`
	width: 78px;
	height: 78px;
	cursor: pointer;
	border: none;
	background-color: #bdbdbd;
	margin-right: 15px;
`;

export const ButtonWrapper = styled.div`
	text-align: center;
`;
export const Button = styled.button`
	width: 100px;
	height: 30px;
	border: 1px solid;
	border-radius: 15px;
	cursor: pointer;
	background-color: ${(props) => (props.isActive ? "blueviolet" : "white")};
	color: ${(props) => (props.isActive ? "white" : "black")};
`;

export const WriterPasswordWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export const Writer = styled.input`
	width: 100%;
	height: 30px;
	outline: none;
	border: 1px solid #bdbdbd;
	border-radius: 5px;
`;

export const Password = styled.input`
	width: 100%;
	height: 30px;
	outline: none;
	border: 1px solid #bdbdbd;
	border-radius: 5px;
`;

export const Error = styled.div`
	font-size: 12px;
	color: red;
`;
