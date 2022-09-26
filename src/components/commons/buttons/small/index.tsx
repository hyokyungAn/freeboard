import styled from "@emotion/styled";

interface IButtonProps {
	isActive?: boolean;
	title: string;
}

interface IProps {
	isActive?: boolean;
}

export default function SmallButton(props: IButtonProps) {
	return <Button isActive={props.isActive}>{props.title}</Button>;
}

const Button = styled.button`
	background-color: ${(props: IProps) => (props.isActive ? "black" : "White")};
	color: ${(props: IProps) => (props.isActive ? "White" : "black")};
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #000;
	width: 170px;
	height: 45px;
`;
