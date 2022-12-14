import { gql } from "@apollo/client";

export const TOGGLE_USED_ITEM_PICK = gql`
	mutation toggleUseditemPick($useditemId: ID!) {
		toggleUseditemPick(useditemId: $useditemId)
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
