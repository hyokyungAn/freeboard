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
							{props.data.fetchUseditem.images.map((el: string) => (
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
								<S.Text>ํ๋งค๊ฐ</S.Text>
								<S.PriceWonWrapper>
									<S.Price>
										{props.data?.fetchUseditem.price.toLocaleString()}
									</S.Price>
									<S.Text>์</S.Text>
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
							{props.data?.fetchUseditem.tags.map(
								(el: string, index: number) => (
									<S.Tags key={index}>#{el}</S.Tags>
								)
							)}
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
					<S.NoticeRabel>๋ธ๋๋ ์์น</S.NoticeRabel>
					<S.MapWrapper
						id="map"
						style={{ width: "100%", height: 400, margin: "0 auto" }}
					></S.MapWrapper>
				</S.NoticeWrapper>
				<S.NoticeWrapper>
					<S.NoticeRabel>๋ฐฐ์ก/๊ตํ/๋ฐํ/AS ๊ด๋?จ ์?์์ฌํญ</S.NoticeRabel>
					<S.Notice>
						์ํ์์ธ์ค๋ช์ ๋ฐฐ์ก/๊ตํ/๋ฐํ/์ทจ์ ๊ด๋?จ ์๋ด๊ฐ ๊ธฐ์ฌ๋ ๊ฒฝ์ฐ ๋ค์
						์๋ด์ฌํญ๋ณด๋ค ์ฐ์? ์?์ฉ๋ฉ๋๋ค.
					</S.Notice>
					<S.ThinLine />
					<S.Notice>
						โข ์ํ๋ณ๋ก ์ํ ํน์ฑ ๋ฐ ๋ฐฐ์ก์ง์ ๋ฐ๋ผ ๋ฐฐ์ก์?ํ ๋ฐ ์์๊ธฐ๊ฐ์ด
						๋ฌ๋ผ์ง๋๋ค.
					</S.Notice>
					<S.Notice>
						โข ์ํ์ ๋ฐฐ์ก๋น๋ ๊ณต๊ธ์์ฒด์ ์?์ฑ์ ๋ฐ๋ผ ๋ค๋ฅด์ค๋ฉฐ ๊ณตํด์ผ ๋ฐ ํด์ผ์
						๋ฐฐ์ก์ด ๋ถ๊ฐํฉ๋๋ค.
					</S.Notice>
					<S.PointNotice>
						โข ์ํํ์ ์ด์ธ ์ฌ์ด์ฆ, ์์๊ตํ ๋ฑ ๋จ์ ๋ณ์ฌ์ ์ํ ๊ตํ/๋ฐํ
						ํ๋ฐฐ๋น ๊ณ?๊ฐ๋ถ๋ด์ผ๋ก ์๋ณตํ๋ฐฐ๋น๊ฐ ๋ฐ์ํฉ๋๋ค. (์?์์๊ฑฐ๋ ๋ฑ์์์
						์๋น์๋ณดํธ์ ๊ดํ ๋ฒ๋ฅ? ์?18์กฐ(์ฒญ์ฝ ์ฒ?ํ ๋ฑ) 9ํญ์ ์๊ฑฐ ์๋น์์
						์ฌ์?์ ์ํ ์ฒญ์ฝ ์ฒ?ํ ์ ํ๋ฐฐ๋น๋ ์๋น์ ๋ถ๋ด์๋๋ค.)
					</S.PointNotice>
					<S.Notice>
						โข ์ฃผ๋ฌธ์๋ฃ ํ ์ฌ๊ณ? ๋ถ์กฑ ๋ฑ์ผ๋ก ์ธํด ์ฃผ๋ฌธ ์ทจ์ ์ฒ๋ฆฌ๊ฐ ๋? ์๋ ์๋ ์?
						์ํด ๋ถํ๋๋ฆฝ๋๋ค.
					</S.Notice>
					<S.Notice>
						โข ๋ฐํ/๊ตํ์ ๋ฏธ์ฌ์ฉ ์?ํ์ ํํด ๋ฐฐ์ก์๋ฃ ํ 7์ผ ์ด๋ด์ ์?์ํ์ฌ
						์ฃผ์ญ์์ค.
					</S.Notice>
					<S.Notice>
						โข ์?ํ์ ์ฌ์ฉ ๋๋ ํผ์ํ ๊ฒฝ์ฐ, ์ฌ์ํ ๋๋ฝ, ์ํ TAG ๋ณด์ฆ์, ์ํ
						๋ถ์์ฌ๊ฐ ์?๊ฑฐ ํน์ ๋ถ์ค๋ ๊ฒฝ์ฐ, ๋ฐ๋ดํฌ์ฅ์ ๊ฐ๋ดํ๊ฑฐ๋ ๋ด๋ถ ํฌ์ฅ์ฌ๋ฅผ
						ํผ์ ๋๋ ๋ถ์คํ ๊ฒฝ์ฐ(๋จ, ์?ํํ์ธ์ ์ํ ๊ฐ๋ด ์?์ธ) ๋ฐํ/๊ตํ์ด
						๋ถ๊ฐํฉ๋๋ค.
					</S.Notice>
					<S.Notice>
						โข A/S ๊ธฐ์ค์ด๋ ๊ฐ๋ฅ์ฌ๋ถ๋ ๋ธ๋๋์ ์ํ์ ๋ฐ๋ผ ๋ค๋ฅด๋ฏ๋ก ๊ด๋?จ ๋ฌธ์๋
						๋ฉ์ฝ ๊ณ?๊ฐ์ผํฐ๋ฅผ ํตํด ๋ถํ๋๋ฆฝ๋๋ค.
					</S.Notice>
					<S.Notice>
						โข ์ํ๋ถ๋์ ์ํ ๋ฐํ,๊ตํ, A/S, ํ๋ถ, ํ์ง๋ณด์ฆ ๋ฐ ํผํด๋ณด์ ๋ฑ์
						๊ดํ ์ฌํญ์ ์๋น์๋ถ์ํด๊ฒฐ๊ธฐ์ค(๊ณต์?๊ฑฐ๋์์ํ ๊ณ?์)์ ๋ฐ๋ผ ๋ฐ์ผ์ค ์
						์์ต๋๋ค.
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
