import * as S from "./LayoutBanner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	};

	return (
		<S.Wrap>
			<S.StyledSlider {...settings}>
				<S.ImageWrapper>
					<S.SliderImage src="/images/layout/caroulsel.jpeg" />
				</S.ImageWrapper>
				<S.ImageWrapper>
					<S.SliderImage src="/images/layout/caroulsel2.jpeg" />
				</S.ImageWrapper>
				<S.ImageWrapper>
					<S.SliderImage src="/images/layout/caroulsel3.jpeg" />
				</S.ImageWrapper>
			</S.StyledSlider>
		</S.Wrap>
	);
}
