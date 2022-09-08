import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { TodayState } from "../../../../commons/store";
import ProductCardUI from "./ProductCard.presenter";
import {
	FETCH_USED_ITEMS_I_PICKED,
	TOGGLE_USED_ITEM_PICK,
} from "./ProductCard.queries";
import { IProductCardUIProps } from "./ProductCard.types";

export default function ProductCard(props: IProductCardUIProps) {
	const router = useRouter();
	const [isActive, setIsActive] = useState<boolean>(false);
	const [today, setToday] = useRecoilState(TodayState);

	const { data: pickList, fetchMore } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
		variables: {
			page: 0,
			search: "",
		},
	});

	useEffect(() => {
		pickList?.fetchUseditemsIPicked.forEach((el: any) => {
			if (el._id === props.el._id) {
				return setIsActive(true);
			}
		});
	}, [pickList?.fetchUseditemsIPicked]);

	const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

	const onClickPick = async (event: MouseEvent<HTMLDivElement>) => {
		try {
			await toggleUseditemPick({
				variables: { useditemId: event.currentTarget.id },
			});
			setIsActive((prev) => !prev);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	const onClickMoveToBrandDetail = (el: any) => (event: any) => {
		const todays = JSON.parse(sessionStorage.getItem("today") || "[]");
		const temp = todays.filter((todaysEl: any) => todaysEl._id !== el._id);
		const { __typename, ...newEl } = el;
		temp.unshift(newEl);

		if (temp.length > 3) {
			temp.pop();
		}

		console.log(temp);
		sessionStorage.setItem("today", JSON.stringify(temp));
		setToday(temp);
		router.push(`/brand/${event?.currentTarget.id}`);
	};

	// const loadFunc = () => {
	// 	console.log(pickList.fetchUseditemsIPicked.length);
	// 	// if (!data) return;
	// 	fetchMore({
	// 		// 더 받아옴
	// 		variables: {
	// 			page: Math.ceil(pickList.fetchUseditemsIPicked.length / 10) + 1,
	// 		}, // 한 페이지당 10개 다음페이지 까지 불러 와야 하기 때문에 + 1 해준다.
	// 		// fetchMoreResult = 11~20  prev는 1~10
	// 		updateQuery: (prev, { fetchMoreResult }) => {
	// 			if (!fetchMoreResult?.fetchUseditemsIPicked)
	// 				return {
	// 					fetchUseditemsIPicked: [...prev.fetchUseditemsIPicked],
	// 				};

	// 			return {
	// 				fetchUseditemsIPicked: [
	// 					...prev.fetchUseditemsIPicked, // 기존거 10개
	// 					...fetchMoreResult.fetchUseditemsIPicked, // 다음거 10개
	// 				],
	// 			};
	// 		},
	// 	});
	// };

	return (
		<ProductCardUI
			isActive={isActive}
			onClickPick={onClickPick}
			onClickMoveToBrandDetail={onClickMoveToBrandDetail}
			el={props.el}
			loadFunc={loadFunc}
		/>
	);
}
