import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { BasketState } from "../../../../commons/store";
import { FETCH_USED_ITEMS } from "../../main/HomeMain.queries";
import MarketDetailUI from "./BrandDetail.presenter";
import {
	CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
	DELETE_USED_ITEM,
	FETCH_USED_ITEM,
	FETCH_USED_ITEMS_I_PICKED,
	FETCH_USER_LOGGED_IN,
	TOGGLE_USED_ITEM_PICK,
} from "./BrandDetail.queries";
import {
	IBasket,
	IBrandDetailProps,
	IFetchUseditemsIPicked,
} from "./BrandDetail.types";

declare const window: typeof globalThis & {
	kakao: any;
};

export default function BrandDetail(props: IBrandDetailProps) {
	const router = useRouter();
	const [mainImg, setMainImg] = useState("");
	const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
	const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
	const [createPointTransactionOfBuyingAndSelling] = useMutation(
		CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
	);
	const [isActive, setIsActive] = useState<boolean>(false);
	const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
	const [basket, setBasket] = useRecoilState(BasketState);

	const id = router.query.useditemId;

	const { data } = useQuery(FETCH_USED_ITEM, {
		variables: { useditemId: id },
	});

	const { data: pickList } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
		variables: {
			page: 1,
			search: "",
		},
	});

	useEffect(() => {
		setMainImg(data?.fetchUseditem.images[0] || "/images/noImage.png");
	}, [data]);

	useEffect(() => {
		pickList?.fetchUseditemsIPicked.forEach((el: IFetchUseditemsIPicked) => {
			if (el._id === id) {
				setIsActive(true);
			}
		});
	}, [pickList?.fetchUseditemsIPicked]);

	const onClickSubImage = (event: MouseEvent<HTMLImageElement>) => {
		setMainImg(event.currentTarget.id);
	};

	const onClickBuy = async () => {
		if (!userData) {
			Modal.error({
				content: "????????? ??? ?????? ???????????????.",
				onOk() {
					router.push("/login");
				},
			});
			return;
		}
		try {
			await createPointTransactionOfBuyingAndSelling({
				variables: { useritemId: id },
			});
			Modal.success({ content: "????????? ?????????????????????." });
			router.push("/brand/main");
		} catch (error) {
			Modal.error({ content: (error as Error).message });
		}
	};

	const onclickEdit = () => {
		router.push(`/brand/${id}/edit`);
	};

	const onClickDelete = async () => {
		Modal.confirm({
			content: "?????? ?????????????????????????",
			async onOk() {
				try {
					await deleteUseditem({
						variables: { useditemId: id },
					});
					Modal.success({ content: "???????????? ?????????????????????." });
					router.push("/brand/main");
				} catch (error) {
					Modal.error({ content: (error as Error).message });
				}
			},
		});
	};

	const onClickShoppingBag = () => {
		// 1. ?????? ???????????? ????????????
		const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

		// 2. ?????? ???????????? ??????
		const temp = baskets.filter(
			(basketEl: IBasket) => basketEl._id === data.fetchUseditem._id
		);
		if (temp.length === 1) {
			Modal.error({ content: "?????? ????????? ???????????????." });
			return;
		}

		// 3. ??????????????? ??????
		const { __typename, ...newEl } = data.fetchUseditem;
		baskets.push(newEl);
		localStorage.setItem("baskets", JSON.stringify(baskets));
		setBasket(baskets);
		Modal.success({ content: "???????????? ?????? ??????!" });
	};

	const onClickPick = async () => {
		try {
			await toggleUseditemPick({
				variables: { useditemId: id },
				refetchQueries: [
					{
						query: FETCH_USED_ITEMS,
						variables: {
							useditemId: id,
						},
					},
				],
			});
			router.replace(router.asPath);
			setIsActive((prev) => !prev);
		} catch (error) {
			console.log((error as Error).message);
		}
	};

	useEffect(() => {
		// div??? ?????? ?????????
		const script = document.createElement("script"); // script????????? ????????????
		script.src =
			"//dapi.kakao.com/v2/maps/sdk.js?appkey=6ab7e8fda05e691adfa7a10eb8beb737&autoload=false&libraries=services"; // src??? ??? ????????? ????????????
		document.head.appendChild(script); // head

		script.onload = () => {
			window.kakao.maps.load(function () {
				const mapContainer = document.getElementById("map"), // ????????? ????????? div
					mapOption = {
						center: new window.kakao.maps.LatLng(
							data?.fetchUseditem.useditemAddress.lat || 36.3708,
							data?.fetchUseditem.useditemAddress.lng || 127.3882
						), // ????????? ????????????
						level: 3, // ????????? ?????? ??????
					};

				const map = new window.kakao.maps.Map(mapContainer, mapOption); // ????????? ???????????????

				// ????????? ????????? ???????????????
				const markerPosition = new window.kakao.maps.LatLng(
					data?.fetchUseditem.useditemAddress.lat,
					data?.fetchUseditem.useditemAddress.lng
				);

				// ????????? ???????????????
				const marker = new window.kakao.maps.Marker({
					position: markerPosition,
				});

				// ????????? ?????? ?????? ??????????????? ???????????????
				marker.setMap(map);
			});
		};
	}, [data]);

	return (
		<MarketDetailUI
			data={data}
			isActive={isActive}
			onClickBuy={onClickBuy}
			onclickEdit={onclickEdit}
			onClickDelete={onClickDelete}
			onClickShoppingBag={onClickShoppingBag}
			onClickPick={onClickPick}
			mainImg={mainImg}
			onClickSubImage={onClickSubImage}
		/>
	);
}
