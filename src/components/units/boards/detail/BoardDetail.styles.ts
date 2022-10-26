import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	max-width: 900px;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 50px;
	margin: 50px;
`;
export const InnerWrapper = styled.div``;
export const Title = styled.div`
	font-size: 24px;
	font-weight: 700;
	padding-bottom: 10px;
`;
export const ProfileWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: 1px solid gray;
	padding-bottom: 20px;
`;
export const Profile = styled.img`
	padding-right: 10px;
	width: 40px;
	height: 40px;
`;
export const Info = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Writer = styled.div`
	font-size: 16px;
`;
export const CreatedAt = styled.div`
	font-size: 12px;
`;

export const ContentsWrapper = styled.div`
	padding-top: 20px;
`;
export const Contents = styled.div`
	text-align: center;
`;
export const ImageWrapper = styled.div``;
export const Image = styled.img``;

export const ButtonWrapper = styled.div`
	text-align: center;
`;

export const Button = styled.button`
	width: 100px;
	height: 30px;
	background-color: white;
	border: 1px solid;
	border-radius: 15px;
	cursor: pointer;
	font-weight: 500;
`;
