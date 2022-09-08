import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export const BestWrapper = styled.div`
	width: 90%;
	margin: 30px 0;
	background-color: whitesmoke;
`;

export const Text = styled.h1`
	width: 100%;
	padding: 40px 0px;
	font-size: 22px;
	text-align: center;
`;

export const BestProductWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
`;

export const InnerWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	justify-items: center;
`;

export const ProductWrapper = styled.div`
	width: 260px;
	height: 450px;
	float: left;
	:hover {
		transform: scale(1.05);
		transition: 0.3s;
	}
	cursor: pointer;
`;

export const ProductImage = styled.img`
	width: 258px;
	height: 320px;
	border: 1px solid #555555;
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

export const ButtonSearchWrapper = styled.div`
	width: 85%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const ButtonWrapper = styled.div``;

// export const Button = styled.button`
// 	width: 150px;
// 	height: 50px;
// 	background: #ffffff;
// 	border: 1px solid #000000;
// 	cursor: pointer;
// `;

export const SearchWrapper = styled.div`
	width: 300px;
	display: flex;
	border-bottom: 2px solid;
	align-items: center;
`;

export const Img = styled.img`
	width: 30px;
	height: 30px;
`;

export const Line = styled.p`
	padding: 10px 0;
	width: 90%;
	margin-top: 15px;
	border-top: 2px solid #555555;
`;
