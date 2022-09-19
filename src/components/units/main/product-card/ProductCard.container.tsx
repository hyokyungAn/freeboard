import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { TodayState } from "../../../../commons/store";
import ProductCardUI from "./ProductCard.presenter";
import { TOGGLE_USED_ITEM_PICK } from "./ProductCard.queries";
import { IProductCardProps } from "./ProductCard.types";

export default function ProductCard(props: IProductCardProps) {
	const router = useRouter();
	const [isActive, setIsActive] = useState<boolean>(false);
	const [today, setToday] = useRecoilState(TodayState);

	useEffect(() => {
		props.pickList?.fetchUseditemsIPicked.forEach((el: any) => {
			if (el._id === props.el._id) {
				return setIsActive(true);
			}
		});
	}, [props.pickList?.fetchUseditemsIPicked]);

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

	return (
		<ProductCardUI
			isActive={isActive}
			onClickPick={onClickPick}
			onClickMoveToBrandDetail={onClickMoveToBrandDetail}
			el={props.el}
		/>
	);
}
