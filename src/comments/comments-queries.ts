import {gql} from 'apollo-boost'

export const GET_COMMENTS = gql`
	query getComments($productCode: String!) {
		getComments(productCode: $productCode) {
			id
			text
			createdAt
			user
			authenticationType
		}
	}
`

export const SUBSCRIBE_NEW_COMMENT = gql`
	subscription newComment($code: String!) {
		newComment (code: $code) {
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
