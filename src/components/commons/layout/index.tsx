// import LayoutBanner from "./banner/LayoutBanner.presenter";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import { ReactNode } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutJoinLoginNavigation from "./join-login-navigation/LayoutJoinLoginNavigation.container";
import LayoutBanner from "./banner/LayoutBanner.container";

const Body = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

interface ILayoutProps {
	children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
	const router = useRouter();

	const HIDDEN_NAVIGATION = ["/login", "/join"];

	const HIDDEN_HEADER = [
		"/login",
		"/join",
		//...
		//...
		//...
	];

	const HIDDEN_JOINLOGINNAVIGATION = [
		"/",
		"/brand/main",
		"/brand/create",
		"/brand/" + router.query.useditemId,
		"/brand/" + router.query.useditemId + "/edit",
		//...
		//...
		//...
	];

	const HIDDEN_BANNER = [
		"/login",
		"/join",
		"/brand/main",
		"/brand/create",
		"/brand/" + router.query.useditemId,
		"/brand/" + router.query.useditemId + "/edit",
	];

	const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
	const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
	const isHiddenJoinLoginNavigation = HIDDEN_JOINLOGINNAVIGATION.includes(
		router.asPath
	);
	const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

	return (
		<>
			{!isHiddenHeader && <LayoutHeader />}
			{!isHiddenNavigation && <LayoutNavigation />}
			{!isHiddenJoinLoginNavigation && <LayoutJoinLoginNavigation />}
			{!isHiddenBanner && <LayoutBanner />}
			<Body>{props.children}</Body>
			<LayoutFooter />
		</>
	);
}
