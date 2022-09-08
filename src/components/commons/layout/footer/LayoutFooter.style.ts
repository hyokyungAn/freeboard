import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
	padding: 40px;
	display: flex;
	flex-direction: column;
	background: #f1f1f1;
	border-top: 1px solid #555555;
`;

export const InnerWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const InnerLogo = styled.img`
	cursor: pointer;
	margin-bottom: 20px;
	background: #f1f1f1;
`;

export const CompanyText = styled.p`
	padding-left: 20px;
	margin: 0;
	margin-bottom: 5px;
	color: #999;
	font-weight: 500;
	font-family: sans-serif;
	:last-child {
		margin-bottom: 0;
	}
`;

export const PrivacyTerms = styled.div`
	display: flex;
`;
