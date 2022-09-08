import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
	query fetchUserLoggedIn {
		fetchUserLoggedIn {
			_id
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
				address
				addressDetail
				lat
				lng
			}
		}
	}
`;

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
	mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
		createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
			_id
			name
			remarks
			contents
			price
		}
	}
`;

export const DELETE_USED_ITEM = gql`
	mutation deleteUseditem($useditemId: ID!) {
		deleteUseditem(useditemId: $useditemId)
	}
`;

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
