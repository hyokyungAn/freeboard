import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./LayoutHeader.queries";
import { IBasket } from "./LayoutHeader.types";

export default function LayoutHeader() {
	const router = useRouter();

	const { data, refetch } = useQuery(FETCH_USER_LOGGED_IN);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [, setAccessToken] = useRecoilState(accessTokenState);
	const [logoutUser] = useMutation(LOGOUT_USER);
	const [basket, setBasket] = useState<IBasket[]>([]);

	const onClickLogo = () => {
		router.push("/");
	};

	const onClickMoveToLogin = () => {
		router.push("/login");
	};

	const onClickMoveTojoin = () => {
		router.push("/join");
	};

	const onClickLoggedOut = () => {
		try {
			setAccessToken("");
			logoutUser();
			router.push("/");
		} catch (error) {
			console.log((error as Error).message);
		}
	};

	const pointCharge = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	useEffect(() => {
		const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
		setBasket(baskets);
	}, []);

	return (
		<LayoutHeaderUI
			data={data}
			onClickLogo={onClickLogo}
			onClickMoveToLogin={onClickMoveToLogin}
			onClickMoveTojoin={onClickMoveTojoin}
			onClickLoggedOut={onClickLoggedOut}
			pointCharge={pointCharge}
			handleCancel={handleCancel}
			isModalVisible={isModalVisible}
			basket={basket}
			refetch={refetch}
		/>
	);
}
