import { MouseEvent } from "react";

export interface ILayoutProps {
	onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
	onClickLogo: (event: MouseEvent<HTMLDivElement>) => void;
	onClickMoveToLogin: (event: MouseEvent<HTMLSpanElement>) => void;
	onClickMoveToJoin: (event: MouseEvent<HTMLSpanElement>) => void;
}
