import * as S from "./BrandDetail.styles";
import { IBrandDetailUIProps } from "./BrandDetail.types";
import DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid";

export default function BrandDetailUI(props: IBrandDetailUIProps) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		auto: false,
	};

	return (
		<S.Wrapper>
			<S.ProductWrapper>
				{props.data?.fetchUseditem?.images[0] ? (
					<S.ImgWrapper>
						<S.Img src={`https://storage.googleapis.com/${props.mainImg}`} />
						<S.StyledSlider {...settings}>
							{props.data.fetchUseditem.images.map((el: any) => (
								<S.SubImage
									onClick={props.onClickSubImage}
									key={uuidv4()}
									id={el}
									src={`https://storage.googleapis.com/${el}`}
								/>
							))}
							{props.data.fetchUseditem.images.length < 5 &&
								new Array(4 - props.data.fetchUseditem.images.length)
									.fill(1)
									.map((_) => {
										return <div key={uuidv4()}></div>;
									})}
						</S.StyledSlider>
					</S.ImgWrapper>
				) : (
					<S.ImgWrapper>
						<S.Img src="/images/noImage.png" />
					</S.ImgWrapper>
				)}
				<S.InfoWrapper>
					<S.InfoTopWrapper>
						<S.NameWrapper>
							<S.Seller>{props.data?.fetchUseditem.seller.name}</S.Seller>
							<S.NameIconWrapper>
								<S.Name>{props.data?.fetchUseditem.name}</S.Name>
								<S.IconWrapper>
									<S.EditIcon
										src="/images/edit.png"
										onClick={props.onclickEdit}
									/>
									<S.DeleteIcon
										src="/images/delete.png"
										onClick={props.onClickDelete}
									/>
								</S.IconWrapper>
							</S.NameIconWrapper>
						</S.NameWrapper>
						<S.PricePickWrapper>
							<S.PriceWrapper>
								<S.Text>판매가</S.Text>
								<S.PriceWonWrapper>
									<S.Price>
										{props.data?.fetchUseditem.price.toLocaleString()}
									</S.Price>
									<S.Text>원</S.Text>
								</S.PriceWonWrapper>
							</S.PriceWrapper>
							<S.PickWrapper>
								<S.Text>My</S.Text>
								<S.PickWrapper onClick={props.onClickPick}>
									{props.isActive ? (
										<S.Pick src="/images/redHeart.png" />
									) : (
										<S.Pick src="/images/heart.png" />
									)}
								</S.PickWrapper>
								<S.Text>Product</S.Text>
							</S.PickWrapper>
						</S.PricePickWrapper>
					</S.InfoTopWrapper>
					<S.BoldLine></S.BoldLine>
					<S.RemarksTagsWrapper>
						{typeof window !== "undefined" ? (
							<S.Remarks
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(props.data?.fetchUseditem.remarks),
								}}
							></S.Remarks>
						) : (
							<S.Remarks />
						)}
						<S.TagsWrapper>
							{props.data?.fetchUseditem.tags.map((el: any, index: any) => (
								<S.Tags key={index}>#{el}</S.Tags>
							))}
						</S.TagsWrapper>
					</S.RemarksTagsWrapper>
					<S.ThinLine></S.ThinLine>
					<S.ButtonWrapper>
						<S.BuyButton onClick={props.onClickBuy}>BUY NOW</S.BuyButton>
						<S.ShoppingBagButton onClick={props.onClickShoppingBag}>
							SHOPPING BAG
						</S.ShoppingBagButton>
					</S.ButtonWrapper>
				</S.InfoWrapper>
			</S.ProductWrapper>
			<S.ContentsWrapper>
				<S.DetailRabel>DETAIL</S.DetailRabel>
				<S.BoldLine></S.BoldLine>
				{typeof window !== "undefined" ? (
					<S.Contents
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
						}}
					></S.Contents>
				) : (
					<S.Contents />
				)}
				<S.NoticeWrapper>
					<S.NoticeRabel>브랜드 위치</S.NoticeRabel>
					<S.MapWrapper
						id="map"
						style={{ width: "100%", height: 400, margin: "0 auto" }}
					></S.MapWrapper>
				</S.NoticeWrapper>
				<S.NoticeWrapper>
					<S.NoticeRabel>배송/교환/반품/AS 관련 유의사항</S.NoticeRabel>
					<S.Notice>
						상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음
						안내사항보다 우선 적용됩니다.
					</S.Notice>
					<S.ThinLine />
					<S.Notice>
						• 상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이
						달라집니다.
					</S.Notice>
					<S.Notice>
						• 상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은
						배송이 불가합니다.
					</S.Notice>
					<S.PointNotice>
						• 상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품
						택배비 고객부담으로 왕복택배비가 발생합니다. (전자상거래 등에서의
						소비자보호에 관한 법률 제18조(청약 철회 등) 9항에 의거 소비자의
						사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.)
					</S.PointNotice>
					<S.Notice>
						• 주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는 점
						양해 부탁드립니다.
					</S.Notice>
					<S.Notice>
						• 반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에 접수하여
						주십시오.
					</S.Notice>
					<S.Notice>
						• 제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG 보증서, 상품
						부자재가 제거 혹은 분실된 경우, 밀봉포장을 개봉했거나 내부 포장재를
						훼손 또는 분실한 경우(단, 제품확인을 위한 개봉 제외) 반품/교환이
						불가합니다.
					</S.Notice>
					<S.Notice>
						• A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련 문의는
						에이블리 고객센터를 통해 부탁드립니다.
					</S.Notice>
					<S.Notice>
						• 상품불량에 의한 반품,교환, A/S, 환불, 품질보증 및 피해보상 등에
						관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라 받으실 수
						있습니다.
					</S.Notice>
				</S.NoticeWrapper>
			</S.ContentsWrapper>
			<S.ContentsWrapper>
				<S.DetailRabel>Q & A</S.DetailRabel>
				<S.BoldLine></S.BoldLine>
			</S.ContentsWrapper>
		</S.Wrapper>
	);
}
