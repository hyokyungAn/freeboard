import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrap = styled.div`
	width: 100%;
	/* height: 240px;
	width: 780px; */
	/* background-color: #fafafa; */
`;

export const ImageWrapper = styled.div``;

export const SliderImage = styled.img`
	width: 100%;
	object-fit: cover;
	max-width: 1900px;
	height: 750px;
	margin: auto;
`;

export const StyledSlider = styled(Slider)`
	.slick-dots {
		bottom: 40px;
		color: white;
	}

	.slick-dots li button:before {
		color: white;
	}

	.slick-dots li.slick-active button:before {
		color: white;
	}
`;
