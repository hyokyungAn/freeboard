import { Fragment } from "react";
import * as S from "./LayoutJoinLoginNavigation.styles";
import { ILayoutProps } from "./LayoutJoinLoginNavigation.types";
import { v4 as uuidv4 } from "uuid";

const NAVIGATION_MENUS1 = [
	{ name: "생화", page: "/brand/main" },
	{ name: "프리저브드", page: "" },
	{ name: "화분", page: "" },
	{ name: "화병/소품", page: "" },
	{ name: "원데이클래스", page: "" },
];

const NAVIGATION_MENUS2 = [
	{ name: "후기", page: "" },
	{ name: "할인/이벤트", page: "" },
];

export default function LayoutJoinLoginNavigationUI(props: ILayoutProps) {
	return (
		<S.Wrapper>
			<S.InnerLogo
				src="/images/layout/white-logo1.png"
				onClick={props.onClickLogo}
			/>
			<S.Wrapper>
				{NAVIGATION_MENUS1.map((el) => (
					<Fragment key={uuidv4()}>
						<S.MenuItem id={el.page} onClick={props.onClickMenu}>
							{el.name}
						</S.MenuItem>
					</Fragment>
				))}
				<Fragment>
					<S.MenuDivide>|</S.MenuDivide>
				</Fragment>
				{NAVIGATION_MENUS2.map((el) => (
					<Fragment key={uuidv4()}>
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
