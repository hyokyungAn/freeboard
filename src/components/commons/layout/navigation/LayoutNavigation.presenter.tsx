import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";
import { v4 as uuidv4 } from "uuid";

const NAVIGATION_MENUS1 = [
	{ name: "BRAND", page: "/brand/main" },
	{ name: "CATEGORY", page: "" },
	{ name: "LIFE", page: "" },
	{ name: "BEAUTY", page: "" },
];

const NAVIGATION_MENUS2 = [
	{ name: "#STYLE", page: "" },
	{ name: "EVENT", page: "" },
];

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
