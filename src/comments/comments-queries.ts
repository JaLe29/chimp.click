import {gql} from 'apollo-boost'

export const GET_COMMENTS = gql`
	query getComments($code: String!) {
		getComments(code: $code) {
			id
			text
			createdAt
			user
			authenticationType
		}
	}
`

export const SUBSCRIBE_NEW_COMMENT = gql`
	subscription newComment($code: String!, $clientauthorization: String!) {
		newComment (code: $code, clientauthorization: $clientauthorization) {
			id
			text
			createdAt
			user
			authenticationType
		}
	}
`

export const ADD_COMMENT = gql`
	mutation createComment($text: String!, $code: String!, $user: String!, $authenticationType: String!) {
		createComment(data: { text: $text, code: $code, user: $user, authenticationType: $authenticationType }) {
			id
			text
			createdAt
			user
			authenticationType,
		}
	}
`
