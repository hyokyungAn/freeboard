import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";
import { v4 as uuidv4 } from "uuid";

const NAVIGATION_MENUS1 = [{ name: "플라워마켓", page: "/brand/main" }];

const NAVIGATION_MENUS2 = [{ name: "자유게시판", page: "/boards" }];

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
	return (
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
				<Fragment key={uuidv4()}>
					<S.MenuItem id={el.page} onClick={props.onClickMenu}>
						{el.name}
					</S.MenuItem>
				</Fragment>
			))}
		</S.Wrapper>
	);
}
