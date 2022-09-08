import styled from "@emotion/styled";

export const PickContainer = styled.div`
	position: relative;
	width: 260px;
	height: 450px;
	margin-bottom: 32px;
	:hover {
		transform: scale(1.05);
		transition: 0.3s;
	}
	cursor: pointer;
`;

export const PickWrapper = styled.div`
	cursor: pointer;
	position: absolute;
	top: 15px;
	right: 15px;
	width: 18px;
	height: 18px;
`;

export const ProductWrapper = styled.div``;

export const ProductImage = styled.img`
	width: 258px;
	height: 320px;
	border: 1px solid #555555;
`;

export const Pick = styled.img`
	width: 100%;
`;

export const ContentsWrapper = styled.div`
	padding: 1em 0em 0em 1em;
`;

export const TagPriceWrapper = styled.div`
	display: flex;
	gap: 2em;
	font-weight: 700;
	font-size: 20px;
	line-height: 100%;
`;

export const Tags = styled.p`
	color: #f65656;
`;

export const Price = styled.p``;

export const SellerNameWrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: #555555;
`;

export const Seller = styled.p`
	font-weight: 500;
	font-size: 14px;
	line-height: 100%;
`;

export const Name = styled.p`
	display: flex;
	word-break: break-all;
	font-weight: 400;
	font-size: 16px;
	line-height: 100%;
`;
