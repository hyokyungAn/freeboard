import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BrandMainUI from "./BrandMain.presenter";
import {
	FETCH_USED_ITEMS,
	FETCH_USED_ITEMS_I_PICKED,
	FETCH_USED_ITEMS_OF_THE_BEST,
} from "./BrandMain.queries";

export default function BrandMain() {
	const router = useRouter();
	const [keyword, setKeyword] = useState("");
	const [check, setCheck] = useState(true);

	const { data, loading, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS, {
		variables: {
			search: "",
			page: 1,
		},
	});
	const { data: fetchUseditemsOfTheBest } = useQuery(
		FETCH_USED_ITEMS_OF_THE_BEST
	);
	const {
		data: pickList,
		fetchMore: pickListFetchMore,
		loading: pickListLoading,
	} = useQuery(FETCH_USED_ITEMS_I_PICKED, {
		variables: {
			page: 1,
			search: "",
		},
	});

	function onChangeKeyword(value: string) {
		setKeyword(value);
	}

	const onClickMoveToBrandCreate = () => {
		router.push("/brand/create");
	};

	const loadFunc = () => {
		if (!data) return;

		fetchMore({
			variables: {
				page: Math.ceil(data.fetchUseditems.length / 10) + 1,
			},

			updateQuery: (prev, { fetchMoreResult }) => {
				if (!prev.fetchUseditems) {
					return;
				}
				if (!fetchMoreResult.fetchUseditems) {
					return {
						fetchUseditems: [...prev.fetchUseditems],
					};
				}
				return {
					fetchUseditems: [
						...prev.fetchUseditems,
						...fetchMoreResult?.fetchUseditems,
					],
				};
			},
		});
	};

	const loadFuncPick = () => {
		if (!pickList) return;

		pickListFetchMore({
			// 더 받아옴
			variables: {
				page: Math.ceil(pickList.fetchUseditemsIPicked.length / 10) + 1,
				search: "",
			},
			// fetchMoreResult = 11~20  prev는 1~10
			updateQuery: (prev, { fetchMoreResult }) => {
				console.log(pickListLoading);
				console.log("pickListLoading");

				if (!fetchMoreResult?.fetchUseditemsIPicked) {
					setCheck(false);
					return {
						fetchUseditemsIPicked: [...prev.fetchUseditemsIPicked],
					};
				}

				return {
					fetchUseditemsIPicked: [
						...prev.fetchUseditemsIPicked, // 기존거 10개
						...fetchMoreResult.fetchUseditemsIPicked, // 다음거 10개
					],
				};
			},
		});
	};

	useEffect(() => {
		async function loop() {
			loadFuncPick();
		}

		if (!pickListLoading) {
			// loop를 동기적으로 처리해야함... 어캐???
			// while (check) {
			loop();
			// }
		}
	}, [pickListLoading]);

	return (
		<>
			{loading || pickListLoading ? (
				<></>
			) : (
				<BrandMainUI
					data={data}
					pickList={pickList}
					bestData={fetchUseditemsOfTheBest}
					loadFunc={loadFunc}
					refetch={refetch}
					keyword={keyword}
					loadFuncPick={loadFuncPick}
					onChangeKeyword={onChangeKeyword}
					onClickMoveToBrandCreate={onClickMoveToBrandCreate}
				/>
			)}
		</>
	);
}
