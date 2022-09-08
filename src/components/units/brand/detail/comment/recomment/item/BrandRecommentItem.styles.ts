import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const RecommentWrapper = styled.div`
	width: 96%;
	padding-left: 140px;
`;

export const TitleIconWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Title = styled.h1`
	font-weight: 700;
`;

export const Date = styled.p`
	font-size: 12px;
	font-weight: 400;
`;

export const Contents = styled.p`
	font-size: 14px;
	margin-bottom: 0;
`;

export const IconWrapper = styled.div`
	width: 5%;
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
