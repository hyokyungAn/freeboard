import * as S from "../../main/product-card/ProductCard.styles";
import { IProductCardUIProps } from "./ProductCard.types";

export default function ProductCardUI(props: IProductCardUIProps) {
	return (
		<S.PickContainer>
			<S.PickWrapper id={props.el?._id} onClick={props.onClickPick}>
				{props.isActive ? (
					<S.Pick src="/images/redHeart.png" />
				) : (
					<S.Pick src="/images/heart.png" />
				)}
			</S.PickWrapper>
			<S.ProductWrapper
				id={props.el?._id}
				onClick={props.onClickMoveToBrandDetail(props.el)}
			>
				{props.el?.images.length === 0 || props.el?.images[0] === "" ? (
					<S.ProductImage src="/images/noImage.png" />
				) : (
					<S.ProductImage
						src={`https://storage.googleapis.com/${props.el?.images[0]}`}
					/>
				)}
				<S.ContentsWrapper>
					<S.TagPriceWrapper>
						{props.el?.tags[0] ? <S.Tags>#{props.el.tags[0]}</S.Tags> : ""}
						<S.Price>{props.el?.price.toLocaleString()}</S.Price>
					</S.TagPriceWrapper>
					<S.SellerNameWrapper>
						<S.Seller>{props.el?.seller.name}</S.Seller>
						<S.Name>{props.el?.name}</S.Name>
					</S.SellerNameWrapper>
				</S.ContentsWrapper>
			</S.ProductWrapper>
		</S.PickContainer>
	);
}
