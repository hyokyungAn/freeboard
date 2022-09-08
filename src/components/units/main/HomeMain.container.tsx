import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import HomeMainUI from "./HomeMain.presenter";
import { FETCH_USED_ITEMS } from "./HomeMain.queries";

export default function HomeMain() {
	const router = useRouter();

	const id = router.query?.useditemId;

	const { data, loading } = useQuery(FETCH_USED_ITEMS);

	return <>{loading ? <></> : <HomeMainUI data={data} />}</>;
}
