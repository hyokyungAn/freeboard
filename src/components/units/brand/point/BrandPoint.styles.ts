import styled from "@emotion/styled";

interface IProps {
	selected: number;
}

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0%;
	top: 0%;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 100;
`;

export const Modal = styled.div`
	width: 464px;
	height: 316px;
	background-color: white;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 20px;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Text = styled.h1`
	margin-bottom: 40px;
`;

export const CancelButton = styled.div`
	cursor: pointer;
	position: fixed;
	top: 20px;
	right: 20px;
`;

export const ButtonWrapper = styled.div``;

export const Button = styled.div`
	border-radius: 10px;
	background-color: ${(props: IProps) =>
		props.selected !== 0 ? "black" : "#BDBDBD"};
	color: white;
	width: 384px;
	height: 51px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	cursor: pointer;
`;
