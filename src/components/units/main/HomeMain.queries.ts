import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
	query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
		fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
			_id
			name
			remarks
			contents
			price
			seller {
				name
			}
			useditemAddress {
				address
				addressDetail
			}
			images
			pickedCount
			tags
		}
	}
`;

export const FETCH_USED_ITEM = gql`
	query fetchUseditem($useditemId: ID!) {
		fetchUseditem(useditemId: $useditemId) {
			_id
			seller {
				name
			}
			name
			remarks
			contents
			price
			images
			pickedCount
			tags
			useditemAddress {
				lat
				lng
			}
		}
	}
`;

export const FETCH_USED_ITEMS_I_PICKED = gql`
	query ($search: String, $page: Int) {
		fetchUseditemsIPicked(search: $search, page: $page) {
			_id
			pickedCount
		}
	}
`;
