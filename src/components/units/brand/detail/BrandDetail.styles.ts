import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
	width: 100%;
	padding-top: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ProductWrapper = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

export const ImgWrapper = styled.div`
	width: 45%;
	max-width: 550px;
`;

export const Img = styled.img`
	width: 100%;
	height: 700px;
	object-fit: cover;
`;

export const InfoWrapper = styled.div`
	width: 45%;
	padding-top: 30px;
	display: flex;
	flex-direction: column;
`;

export const StyledSlider = styled(Slider)`
	.slick-slide slick-active {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.slick-prev:before {
		font-size: 1.3rem;
		color: black;
	}

	.slick-next:before {
		font-size: 1.3rem;
		color: black;
	}
`;

export const SubImage = styled.img`
	object-fit: contain;
	width: 100px;
	height: 100px;
	margin: 50px 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	@media (max-width: 575px) {
		width: 10vw;
		height: 10vw;
	}
`;

export const NameIconWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	text-align: center;
`;

export const NameWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 50px;
`;

export const Seller = styled.p`
	font-family: "Noto Sans KR";
	font-size: 12px;
	margin-bottom: 0;
`;

export const Name = styled.p`
	height: 30px;
	font-family: "Noto Sans KR";
	font-weight: 700;
	font-size: 24px;
	margin-bottom: 0;
	align-items: center;
`;

export const IconWrapper = styled.div`
	width: 7%;
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

export const PricePickWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 10px;
`;

export const PriceWrapper = styled.div`
	width: 30%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const PriceWonWrapper = styled.div`
	width: 37%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const Price = styled.p`
	font-size: 14px;
	font-weight: 700;
	display: flex;
	margin-bottom: 0;
`;

export const PickWrapper = styled.div`
	width: 15%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

export const Text = styled.p`
	font-size: 12px;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 0;
`;

export const Pick = styled.img`
	cursor: pointer;
	width: 14px;
	height: 14px;
	display: flex;
	justify-content: center;
`;

export const InfoTopWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const BoldLine = styled.p`
	width: 100%;
	border-bottom: 3px solid #555555;
	margin-bottom: 0;
`;

export const RemarksTagsWrapper = styled.div`
	min-height: 45%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Remarks = styled.p`
	margin-bottom: 0;
	padding: 20px;
`;

export const TagsWrapper = styled.div`
	color: #f65656;
	display: flex;
	flex-direction: row;
	padding: 10px 20px;
`;

export const Tags = styled.span`
	margin-right: 8px;
`;

export const ThinLine = styled.p`
	border-bottom: 1px solid #c0c0c0;
	margin-bottom: 0;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding: 20px 0;
`;

export const BuyButton = styled.button`
	width: 35%;
	height: 70px;
	background: black;
	font-family: "Noto Sans KR";
	align-items: center;
	text-align: center;
	color: white;
	cursor: pointer;
	font-size: 22px;
	border: none;
`;

export const ShoppingBagButton = styled.button`
	width: 50%;
	height: 70px;
	background: #5f5f5f;
	font-family: "Noto Sans KR";
	cursor: pointer;
	text-align: center;
	color: white;
	font-size: 22px;
	border: none;
`;

export const ContentsWrapper = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const DetailRabel = styled.h1`
	width: 90%;
	font-family: "Noto Sans KR";
	font-weight: 700;
	font-size: 32px;
	margin-top: 30px;
	margin-bottom: 0;
`;

export const Contents = styled.p`
	display: flex;
	justify-content: center;
	margin-top: 30px;
	margin-bottom: 0;
	width: 100%;
	img {
		max-width: 100%;
		display: flex;
		margin: 0 auto;
	}
`;
export const LocationInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MapWrapper = styled.div``;

export const NoticeWrapper = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
`;

export const NoticeRabel = styled.p`
	font-family: "Noto Sans KR";
	font-size: 22px;
	font-weight: 700;
	margin-top: 30px;
	margin-bottom: 0;
`;

export const Notice = styled.p`
	margin-bottom: 0;
	color: #5f5f5f;
`;

export const PointNotice = styled.p`
	margin-bottom: 0;
	font-weight: 700;
	color: #5f5f5f;
`;
