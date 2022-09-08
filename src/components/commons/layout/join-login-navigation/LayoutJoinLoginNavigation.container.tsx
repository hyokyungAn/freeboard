import { useRouter } from "next/router";
import { MouseEvent } from "react";
import LayoutJoinLoginNavigationUI from "./LayoutJoinLoginNavigation.presenter";

export default function LayoutJoinLoginNavigation() {
	const router = useRouter();

	const onClickLogo = () => {
		router.push("/");
	};

	const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
		if (event.target instanceof Element) router.push(event.target.id);
	};

	const onClickMoveToLogin = () => {
		router.push("/login");
	};

	const onClickMoveToJoin = () => {
		router.push("/join");
	};

	return (
		<LayoutJoinLoginNavigationUI
			onClickLogo={onClickLogo}
			onClickMenu={onClickMenu}
			onClickMoveToLogin={onClickMoveToLogin}
			onClickMoveToJoin={onClickMoveToJoin}
		/>
	);
}
