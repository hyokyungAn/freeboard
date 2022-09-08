import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
	query fetchUserLoggedIn {
		fetchUserLoggedIn {
			name
			userPoint {
				amount
			}
		}
	}
`;

export const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
			accessToken
		}
	}
`;

export const LOGOUT_USER = gql`
	mutation logoutUser {
		logoutUser
	}
`;

// export const FETCH_POINT_TRANSACTIONS = gql`
// 	query fetchPointTransactions($search: String, $page: Int) {
// 		fetchPointTransactions(search: $search, page: $page) {
// 			balance
// 		}
// 	}
// `;
