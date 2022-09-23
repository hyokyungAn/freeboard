import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
	query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
		fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
			_id
			seller {
				name
			}
			name
			remarks
			contents
			price
			tags
			pickedCount
			useditemAddress {
				address
				addressDetail
			}
			images
		}
	}
`;

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
	query fetchUseditemsOfTheBest {
		fetchUseditemsOfTheBest {
			_id
			images
			name
			price
			tags
			contents
			seller {
				name
			}
			useditemAddress {
				address
				addressDetail
			}
			remarks
			pickedCount
			__typename
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
