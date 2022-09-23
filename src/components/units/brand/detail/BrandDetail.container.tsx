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
import { IBrandDetailProps, IFetchUseditemsIPicked } from "./BrandDetail.types";

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
				content: "로그인 후 이용 가능합니다.",
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
			Modal.success({ content: "구매가 완료되었습니다." });
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
			content: "정말 삭제하시겠습니까?",
			async onOk() {
				try {
					await deleteUseditem({
						variables: { useditemId: id },
					});
					Modal.success({ content: "게시물이 삭제되었습니다." });
					router.push("/brand/main");
				} catch (error) {
					Modal.error({ content: (error as Error).message });
				}
			},
		});
	};

	const onClickShoppingBag = () => {
		// 1. 기존 장바구니 가져오기
		const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

		// 2. 이미 담겼는지 확인
		const temp = baskets.filter(
			(basketEl: any) => basketEl._id === data.fetchUseditem._id
		);
		if (temp.length === 1) {
			Modal.error({ content: "이미 담으신 상품입니다." });
			return;
		}

		// 3. 장바구니에 담기
		const { __typename, ...newEl } = data.fetchUseditem;
		baskets.push(newEl);
		localStorage.setItem("baskets", JSON.stringify(baskets));
		setBasket(baskets);
		Modal.success({ content: "장바구니 담기 성공!" });
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
		// div에 지도 그려줘
		const script = document.createElement("script"); // script태그를 만들거야
		script.src =
			"//dapi.kakao.com/v2/maps/sdk.js?appkey=6ab7e8fda05e691adfa7a10eb8beb737&autoload=false&libraries=services"; // src에 이 주소를 넣을거야
		document.head.appendChild(script); // head

		script.onload = () => {
			window.kakao.maps.load(function () {
				const mapContainer = document.getElementById("map"), // 지도를 표시할 div
					mapOption = {
						center: new window.kakao.maps.LatLng(
							data?.fetchUseditem.useditemAddress.lat || 36.3708,
							data?.fetchUseditem.useditemAddress.lng || 127.3882
						), // 지도의 중심좌표
						level: 3, // 지도의 확대 레벨
					};

				const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

				// 마커가 표시될 위치입니다
				const markerPosition = new window.kakao.maps.LatLng(
					data?.fetchUseditem.useditemAddress.lat,
					data?.fetchUseditem.useditemAddress.lng
				);

				// 마커를 생성합니다
				const marker = new window.kakao.maps.Marker({
					position: markerPosition,
				});

				// 마커가 지도 위에 표시되도록 설정합니다
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
