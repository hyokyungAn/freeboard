import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HomeMainUI from "./HomeMain.presenter";
import {
	FETCH_USED_ITEMS,
	FETCH_USED_ITEMS_I_PICKED,
} from "./HomeMain.queries";

export default function HomeMain() {
	const router = useRouter();
	const [check, setCheck] = useState(true);

	const id = router.query?.useditemId;

	const { data, loading } = useQuery(FETCH_USED_ITEMS);
	const {
		data: pickList,
		fetchMore,
		loading: pickListLoading,
	} = useQuery(FETCH_USED_ITEMS_I_PICKED, {
		variables: {
			page: 1,
			search: "",
		},
	});

	const loadFunc = () => {
		if (!pickList) return;

		fetchMore({
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
			await loadFunc();
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
				<HomeMainUI data={data} pickList={pickList} />
			)}
		</>
	);
}
