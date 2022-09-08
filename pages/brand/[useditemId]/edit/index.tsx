import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useAuth } from "../../../../src/components/commons/hooks/useAuth";
import BrandCreate from "../../../../src/components/units/brand/create/BrandCreate.container";

export const FETCH_USED_ITEM = gql`
	query fetchUseditem($useditemId: ID!) {
		fetchUseditem(useditemId: $useditemId) {
			_id
			name
			remarks
			contents
			price
			tags
			useditemAddress {
				zipcode
				address
				addressDetail
				lat
				lng
			}
			images
		}
	}
`;

export default function BrandEditPage() {
	useAuth();
	const router = useRouter();
	const { data, loading } = useQuery(FETCH_USED_ITEM, {
		variables: { useditemId: router.query.useditemId },
	});

	return loading ? <></> : <BrandCreate isEdit={true} data={data} />;
}
