import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MENUS1 = [
	{ name: "BRAND", page: "/brand/main" },
	{ name: "CATEGORY" },
	{ name: "LIFE" },
	{ name: "BEAUTY" },
];

const NAVIGATION_MENUS2 = [{ name: "#STYLE" }, { name: "EVENT" }];

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
				<Fragment key={el.page}>
					<S.MenuItem id={el.page} onClick={props.onClickMenu}>
						{el.name}
					</S.MenuItem>
				</Fragment>
			))}
		</S.Wrapper>
	);
}
