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
					<S.SliderImage src="/images/layout/caroulsel1.jpg" />
				</S.ImageWrapper>
				<S.ImageWrapper>
					<S.SliderImage src="/images/layout/caroulsel2.jpg" />
				</S.ImageWrapper>
				<S.ImageWrapper>
					<S.SliderImage src="/images/layout/caroulsel3.jpg" />
				</S.ImageWrapper>
				<S.ImageWrapper>
					<S.SliderImage src="/images/layout/caroulsel4.jpg" />
				</S.ImageWrapper>
			</S.StyledSlider>
		</S.Wrap>
	);
}
