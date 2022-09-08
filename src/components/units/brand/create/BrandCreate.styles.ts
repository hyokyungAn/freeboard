import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const DaumPostcode = styled.div``;

export const Wrapper = styled.form`
	width: 90%;
	padding: 80px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: none;
`;

export const Title = styled.h1`
	font-size: 35px;
	font-weight: 700;
`;

export const BoldLine = styled.p`
	border-bottom: 3px solid #555555;
	margin-bottom: 0;
`;

export const InputWrapper = styled.div`
	display: flex;
	/* align-items: center; */
	margin-top: 24px;
`;

export const InputErrorWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

// export const RemarksInput = styled.textarea`
// 	background-color: #e9e9e9;
// 	border: none;
// 	outline: none;
// 	width: 100%;
// 	padding: 15px;
// 	height: 45px;
// 	margin-top: 3px;

// 	::placeholder {
// 		color: #c0c0c0;
// 		font-size: small;
// 		transition: all 0.3s ease-in-out;
// 	}
// `;

export const Label = styled.p`
	width: 200px;
	height: 45px;
	align-self: center;
	margin-bottom: 0;
	/* color: ${(props) => props.aaa} */
`;

export const Text = styled.p`
	width: 200px;
	height: 45px;
	margin-bottom: 0;
`;

export const Error = styled.p`
	margin-top: 5px;
	height: 10px;
	color: red;
	font-size: 10px;
`;

export const ThinLine = styled.p`
	border: 1px solid #999999;
	margin-bottom: 0;
`;

export const ContentsWrapper = styled.div`
	display: flex;
`;

export const RemarksEditor = styled(ReactQuill)`
	.ql-container {
		width: 100%;
		height: auto;
	}
	.ql-editor.ql-blank::before {
		color: #c0c0c0;
		font-size: small;
		font-style: normal;
		transition: all 0.3s ease-in-out;
	}
`;

export const TagsWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 12px;
`;

export const LocationWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin: 24px 0;
`;

export const TransationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const Map = styled.div``;

export const AddressWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 100%;
	padding: 40px 0 0 20px;
`;

export const ZipcodeWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Zipcode = styled.input`
	width: 80px;
	height: 50px;
	text-align: center;
	border: 1px solid #bdbdbd;
	outline: none;
`;

export const ZipcodeButton = styled.button`
	width: 124px;
	height: 52px;
	margin-left: 16px;
	background-color: black;
	cursor: pointer;
	color: white;
`;

export const ImageWrapper = styled.div`
	margin: 24px 0 36px 0;
`;

export const ButtonWrapper = styled.div`
	width: 25%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	text-align: center;
	margin: 0 auto;
	margin-top: 75px;
`;
