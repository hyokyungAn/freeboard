import styled from "@emotion/styled";

interface IMediumButtonProps {
	onClick: () => void;
	title: string;
	isActive?: boolean;
}

interface IProps {
	isActive?: boolean;
}

const Button = styled.button`
	background-color: ${(props: IProps) => (props.isActive ? "black" : "white")};
	color: ${(props) => (props.isActive ? "White" : "black")};
	font-weight: 700;
	border: 1px solid #000;
	width: 150px;
	height: 55px;
	cursor: pointer;
`;

export default function MediumButton(props: IMediumButtonProps) {
	return (
		<Button type="button" onClick={props.onClick} isActive={props.isActive}>
			{props.title}
		</Button>
	);
}
