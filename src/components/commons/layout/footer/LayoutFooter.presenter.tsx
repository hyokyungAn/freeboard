import * as S from "./LayoutFooter.style";

interface IProps {
	onClickLogo: () => void;
}

export default function LayoutFooterUI(props: IProps) {
	return (
		<S.Wrapper>
			<S.InnerWrapper>
				<S.Logo>
					<S.InnerLogo
						src="/images/layout/flowers-logo2.png"
						onClick={props.onClickLogo}
					/>
					<S.InnerText>|</S.InnerText>
					<S.InnerText> YOU ARE A FLOWER</S.InnerText>
				</S.Logo>
				<S.CompanyText>㈜ 그대는꽃</S.CompanyText>
				<S.CompanyText>사업자등록번호 123-45-67890</S.CompanyText>
				<S.CompanyText>주소: 대전광역시 유성구 가정로 312</S.CompanyText>
				<S.PrivacyTerms>
					<S.CompanyText>개인정보 처리방침</S.CompanyText>
					<S.CompanyText>서비스 이용 약관</S.CompanyText>
				</S.PrivacyTerms>
			</S.InnerWrapper>
		</S.Wrapper>
	);
}
