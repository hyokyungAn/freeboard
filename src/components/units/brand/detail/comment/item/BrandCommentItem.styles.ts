import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	border-bottom: 1px solid #c0c0c0;
	margin-top: 15px;
`;

export const PasswordInput = styled.input`
	width: 100%;
	margin-top: 10px;
`;

export const CommentWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export const CommentWriterWrapper = styled.div`
	width: 10%;
	padding: 15px;
`;

export const CommentWriter = styled.div`
	background-color: black;
	color: white;
	padding: 3px;
	font-weight: 500;
	font-size: 14px;
	align-items: center;
	text-align: center;
`;

export const CommentContents = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1px solid #c0c0c0;
	padding: 15px;
`;

export const Contents = styled.p`
	width: 70%;
	font-size: 14px;
`;

export const DateIconWrapper = styled.div`
	width: 15%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export const Date = styled.div`
	font-size: 12px;
	font-weight: 400;
`;

export const IconWrapper = styled.div`
	width: 30%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export const EditIcon = styled.img`
	width: 14px;
	height: 14px;
	cursor: pointer;
`;

export const DeleteIcon = styled.img`
	width: 14px;
	height: 14px;
	cursor: pointer;
`;

export const RecommentIcon = styled.img`
	width: 14px;
	height: 14px;
	cursor: pointer;
`;
