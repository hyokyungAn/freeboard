import { Fragment } from "react";
import * as S from "./LayoutJoinLoginNavigation.styles";
import { ILayoutProps } from "./LayoutJoinLoginNavigation.types";

const NAVIGATION_MENUS1 = [
	{ name: "BRAND", page: "/brand/main" },
	{ name: "CATEGORY" },
	{ name: "LIFE" },
	{ name: "BEAUTY" },
];

const NAVIGATION_MENUS2 = [{ name: "#STYLE" }, { name: "EVENT" }];

export default function LayoutJoinLoginNavigationUI(props: ILayoutProps) {
	return (
		<S.Wrapper>
			<S.InnerLogo
				src="/images/layout/white-logo1.png"
				onClick={props.onClickLogo}
			/>
			<S.Wrapper>
				{NAVIGATION_MENUS1.map((el) => (
					<Fragment key={el.page}>
						<S.MenuItem id={el.page} onClick={props.onClickMenu}>
							{el.name}
						</S.MenuItem>
					</Fragment>
				))}
				<Fragment>
					<S.MenuDivide>|</S.MenuDivide>
				</Fragment>
				{NAVIGATION_MENUS2.map((el) => (
					<Fragment key={el.page}>
						<S.MenuItem id={el.page} onClick={props.onClickMenu}>
							{el.name}
						</S.MenuItem>
					</Fragment>
				))}
			</S.Wrapper>
			<div>
				<S.InnerButton onClick={props.onClickMoveToLogin}>로그인</S.InnerButton>
				<S.InnerButton onClick={props.onClickMoveToJoin}>
					회원가입
				</S.InnerButton>
				<S.InnerButton>장바구니</S.InnerButton>
			</div>
		</S.Wrapper>
	);
}
