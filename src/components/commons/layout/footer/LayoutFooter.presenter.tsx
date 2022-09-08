import * as S from "./LayoutFooter.style";

interface IProps {
	onClickLogo: () => void;
}

export default function LayoutFooterUI(props: IProps) {
	return (
		<S.Wrapper>
			<S.InnerWrapper>
				<S.InnerLogo
					src="/images/layout/dingco-logo3.png"
					onClick={props.onClickLogo}
				/>
				<S.CompanyText>㈜딩코</S.CompanyText>
				<S.CompanyText>사업자등록번호 717-87-02373</S.CompanyText>
				<S.CompanyText>
					주소: 서울특별시 구로구 디지털로 300, 패스트파이브
				</S.CompanyText>
				<S.CompanyText>학원 등록 번호: 제 5845호</S.CompanyText>
				<S.PrivacyTerms>
					<S.CompanyText>개인정보 처리방침</S.CompanyText>
					<S.CompanyText>서비스 이용 약관</S.CompanyText>
				</S.PrivacyTerms>
				<S.CompanyText>Copyright © 2022. Dingco Corp., Ltd.</S.CompanyText>
			</S.InnerWrapper>
		</S.Wrapper>
	);
}
