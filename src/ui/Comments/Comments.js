import React, {useState, useCallback, useEffect} from 'react'
import {useQuery, useSubscription, useMutation} from '@apollo/react-hooks'
import TextArea from '../TextArea'
import {gql} from 'apollo-boost'
import Comment from './../Comment'
import {ApolloProvider} from '@apollo/react-hooks'
import PrivateApolloClient from '../core/ApolloClient'
import {DIRECTION, DEFAULT_DIRECTION, DEFAULT_TEXT_AREA_PLACEHOLDER} from './commentsConst'

const GET_COMMENTS = gql`
	query getComments($code: String!) {
		getComments(where: { code: $code }) {
			id
			text
			createdAt
			user
		authenticationType
		}
	}
`

const SUBSCRIBE_NEW_COMMENT = gql`
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

const ADD_COMMENT = gql`
	mutation createComment($text: String!, $code: String!, $user: String!, $authenticationType: AuthenticationType!) {
		createComment(data: { text: $text, code: $code, user: $user, authenticationType: $authenticationType }) {
			id
			text
			createdAt
			user
		authenticationType,
		}
	}
`

const Comments = (props) => {
	const {code, authKey, users, user, authenticationType, direction} = props

	const [clientData, setClientData] = useState([])
	const {loading, data, refetch} = useQuery(GET_COMMENTS, {variables: {code}})
	const [addMessage] = useMutation(ADD_COMMENT)

	const handleNewCommentReceived = useCallback((inData) => {
		const {subscriptionData: {data: {newComment}}} = inData
		setClientData([newComment, ...clientData])
	}, [setClientData, clientData])

	useSubscription(SUBSCRIBE_NEW_COMMENT, {onSubscriptionData: handleNewCommentReceived, variables: {code}})

	const [inputState, setInputState] = useState('ready')

	const handleSubmit = useCallback(
		async value => {
			await addMessage({variables: {authenticationType, text: value, code, user}})
			setInputState('done')
		},
		[addMessage, authKey, clientData, code]
	)

	useEffect(() => {
		setClientData([])
		refetch()
	}, [refetch, code, authKey]);

	const isTopDirection = direction === DIRECTION.TOP

	const textInput = (
		user && (
			<TextArea
				onSubmit={handleSubmit}
				inputState={inputState}
				setInputState={setInputState}
				placeholder={props.textAreaPlaceholder}
			/>
		)
	)

	return (
		<div>
			{isTopDirection && textInput}
			{loading ? (
				'LOADING'
			) : (
					<>
						{clientData.length === 0 && data.getComments.length === 0 ? (
							'EMPTY'
						) : (
								<>
									{clientData.map(c => (
										<Comment key={c.id} {...c} users={users} />
									))}
									{data.getComments.map(c => (
										<Comment key={c.id} {...c} users={users} />
									))}
								</>
							)}
					</>
				)}
			{!isTopDirection && textInput}
		</div>
	)
}

const CommentsWrapper = (props) => {
	const {authKey} = props

	return (
		<ApolloProvider client={PrivateApolloClient(authKey)}>
			<Comments {...props} />
		</ApolloProvider>
	)
}

CommentsWrapper.defaultProps = {
	direction: DEFAULT_DIRECTION,
	textAreaPlaceholder: DEFAULT_TEXT_AREA_PLACEHOLDER,
};


export default CommentsWrapper
