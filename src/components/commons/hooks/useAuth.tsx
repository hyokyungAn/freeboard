import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
	query fetchUserLoggedIn {
		fetchUserLoggedIn {
			name
			userPoint {
				amount
			}
		}
	}
`;
export function useAuth() {
	const { data, loading } = useQuery(FETCH_USER_LOGGED_IN);
	const router = useRouter();

	useEffect(() => {
		if (!loading) {
			if (!data?.fetchUserLoggedIn) {
				Modal.error({ content: "로그인 후 이용 가능합니다!" });
				router.push("/login");
			}
		}
	}, [loading]);
}
