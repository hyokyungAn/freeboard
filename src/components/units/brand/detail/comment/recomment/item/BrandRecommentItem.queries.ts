import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
	query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
		fetchUseditemQuestionAnswers(
			page: $page
			useditemQuestionId: $useditemQuestionId
		) {
			_id
			contents
			createdAt
			user {
				email
				_id
				name
			}
		}
	}
`;

export const DELETE_USED_QUESTION_ANSWER = gql`
	mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
		deleteUseditemQuestionAnswer(
			useditemQuestionAnswerId: $useditemQuestionAnswerId
		)
	}
`;

export const FETCH_USER_LOGGED_IN = gql`
	query fetchUserLoggedIn {
		fetchUserLoggedIn {
			_id
		}
	}
`;
