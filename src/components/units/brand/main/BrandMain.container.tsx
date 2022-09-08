import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import BrandMainUI from "./BrandMain.presenter";
import {
	FETCH_USED_ITEMS,
	FETCH_USED_ITEMS_OF_THE_BEST,
} from "./BrandMain.queries";

export default function BrandMain(props: IBrandMainProps) {
	const router = useRouter();
	const [keyword, setKeyword] = useState("");

	const { data, loading, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS);
	const { data: fetchUseditemsOfTheBest } = useQuery(
		FETCH_USED_ITEMS_OF_THE_BEST
	);

	function onChangeKeyword(value: string) {
		setKeyword(value);
	}

	const onClickMoveToBrandCreate = () => {
		router.push("/brand/create");
	};

	const onClickMoveToBrandDetail =
		(el: any) => (event: MouseEvent<HTMLDivElement>) => {
			router.push(`/brand/${event?.currentTarget.id}`);
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

	return (
		<>
			{loading ? (
				<></>
			) : (
				<BrandMainUI
					data={data}
					bestData={fetchUseditemsOfTheBest}
					loadFunc={loadFunc}
					refetch={refetch}
					keyword={keyword}
					onChangeKeyword={onChangeKeyword}
					onClickMoveToBrandCreate={onClickMoveToBrandCreate}
					onClickMoveToBrandDetail={onClickMoveToBrandDetail}
				/>
			)}
		</>
	);
}
