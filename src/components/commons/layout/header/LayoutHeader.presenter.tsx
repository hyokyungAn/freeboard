import { Badge } from "antd";
import BrandPoint from "../../../units/brand/point/BrandPoint.container";
import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
	return (
		<S.Wrapper>
			<S.InnerWrapper>
				<S.InnerLogo
					src="/images/layout/dingco-logo1.png"
					onClick={props.onClickLogo}
				/>
				<div>
					{props.data?.fetchUserLoggedIn ? (
						<S.InnerButton>
							{props.data?.fetchUserLoggedIn.name}님 포인트 {""}
							{props.data?.fetchUserLoggedIn.userPoint.amount} P
						</S.InnerButton>
					) : (
						""
					)}
					{props.data?.fetchUserLoggedIn ? (
						<S.InnerButton onClick={props.pointCharge}>충전</S.InnerButton>
					) : (
						<S.InnerButton onClick={props.onClickMoveToLogin}>
							로그인
						</S.InnerButton>
					)}

					<S.InnerButton
						onClick={
							props.data?.fetchUserLoggedIn
								? props.onClickLoggedOut
								: props.onClickMoveTojoin
						}
					>
						{props.data?.fetchUserLoggedIn ? "로그아웃" : "회원가입"}
					</S.InnerButton>
					<S.InnerButton>장바구니</S.InnerButton>
					<Badge count={props.basket.length}></Badge>
				</div>
			</S.InnerWrapper>
			{props.isModalVisible && (
				<BrandPoint handleCancel={props.handleCancel} refetch={props.refetch} />
			)}
		</S.Wrapper>
	);
}
