import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
	query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
		fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
			_id
			user {
				name
				email
			}
			contents
			createdAt
		}
	}
`;

export const FETCH_USER_LOGGED_IN = gql`
	query fetchUserLoggedIn {
		fetchUserLoggedIn {
			_id
			email
			name
		}
	}
`;

export const DELETE_USED_ITEM_QUESTIONS = gql`
	mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
		deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
	}
`;
