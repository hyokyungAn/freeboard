import { gql } from "@apollo/client";

export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
	mutation createUseditemQuestionAnswer(
		$createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
		$useditemQuestionId: ID!
	) {
		createUseditemQuestionAnswer(
			createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
			useditemQuestionId: $useditemQuestionId
		) {
			_id
		}
	}
`;

export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
	mutation updateUseditemQuestionAnswer(
		$updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
		$useditemQuestionAnswerId: ID!
	) {
		updateUseditemQuestionAnswer(
			updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
			useditemQuestionAnswerId: $useditemQuestionAnswerId
		) {
			_id
		}
	}
`;

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
