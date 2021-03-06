import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useQuery, useSubscription, useMutation } from '@apollo/react-hooks'
import TextArea from '../text-area'
import Comment from './../comment'
import { ApolloProvider } from '@apollo/react-hooks'
import PrivateApolloClient from '../core/apollo-client'
import { DIRECTION, DEFAULT_DIRECTION, DEFAULT_TEXT_AREA_PLACEHOLDER } from './comments-const'
import { GET_COMMENTS, SUBSCRIBE_NEW_COMMENT, ADD_COMMENT } from './comments-queries'
import Error from './../error'

const Comments = (props: any) => {
	const {
		showMessageTime,
		wrapperClassName,
		textAreaClassName,
		messagesAreaClassName,
		messageHeaderClassName,
		messageTextClassName,
		showTextWhenEmpty,
		code,
		authKey,
		users,
		user,
		authenticationType,
		direction,
		hasSendButton,
		sendButtonContent,
	} = props

	const commentsWrapperRef = useRef()
	const [clientData, setClientData] = useState([])
	const { loading, error, data, refetch } = useQuery(GET_COMMENTS, { variables: { code } })
	const [addMessage] = useMutation(ADD_COMMENT)

	const handleNewCommentReceived = useCallback((inData) => {
		const { subscriptionData: { data: { newComment } } } = inData

		const isTopDirection = direction === DIRECTION.TOP

		if (isTopDirection) {
			// top
			setClientData([newComment, ...clientData])
		} else {
			// bottom
			setClientData([...clientData, newComment])
		}

	}, [setClientData, clientData, commentsWrapperRef])

	useSubscription(SUBSCRIBE_NEW_COMMENT, { onSubscriptionData: handleNewCommentReceived, variables: { code, clientauthorization: authKey } })

	const [inputState, setInputState] = useState('ready')

	const handleSubmit = useCallback(
		async value => {
			await addMessage({ variables: { authenticationType, text: value, code, user } })
			setInputState('done')
		},
		[addMessage, authKey, clientData, code]
	)

	useEffect(() => {
		setClientData([])
		refetch()
	}, [refetch, code, authKey])

	useEffect(() => {
		// @ts-ignore
		if (commentsWrapperRef.current) commentsWrapperRef.current.scrollTop = Number.MAX_SAFE_INTEGER
	})

	const getMessages = useCallback(() => {
		const isTopDirection = direction === DIRECTION.TOP
		if (isTopDirection) return data.getComments
		return [...data.getComments].reverse()
	}, [data, direction])

	const isTopDirection = direction === DIRECTION.TOP
	// @ts-ignore
	if (commentsWrapperRef.current) commentsWrapperRef.current.scrollTop = Number.MAX_SAFE_INTEGER

	const textInput = (
		user && (
			<TextArea
				className={textAreaClassName}
				onSubmit={handleSubmit}
				inputState={inputState}
				setInputState={setInputState}
				placeholder={props.textAreaPlaceholder}
				hasSendButton={hasSendButton}
				sendButtonContent={sendButtonContent}
			/>
		)
	)

	const clientComments = (
		clientData.map(c => (
			<Comment
				key={c.id}
				{...c} users={users}
				messageTextClassName={messageTextClassName}
				messageHeaderClassName={messageHeaderClassName}
				showMessageTime={showMessageTime}
			/>
		))
	)

	if (error) {
		return <Error error={error} />
	}

	return (
		<div className={wrapperClassName}>
			{isTopDirection && textInput}
			{loading ? (
				'LOADING'
			) : (
					<>
						{showTextWhenEmpty && clientData.length === 0 && data.getComments.length === 0 ? (
							'EMPTY'
						) : (
								<div className={messagesAreaClassName} ref={commentsWrapperRef}>
									{isTopDirection && clientComments}
									{getMessages().map(c => (
										<Comment
											key={c.id}
											{...c}
											users={users}
											messageTextClassName={messageTextClassName}
											messageHeaderClassName={messageHeaderClassName}
											showMessageTime={showMessageTime}
										/>
									))}
									{!isTopDirection && clientComments}
								</div>
							)}
					</>
				)}
			{!isTopDirection && textInput}
		</div>
	)
}

const CommentsWrapper = (props: { authKey: string }) => {
	const { authKey } = props

	return (
		<ApolloProvider client={PrivateApolloClient(authKey)}>
			<Comments {...props} />
		</ApolloProvider>
	)
}

CommentsWrapper.defaultProps = {
	direction: DEFAULT_DIRECTION,
	textAreaPlaceholder: DEFAULT_TEXT_AREA_PLACEHOLDER,
	showTextWhenEmpty: false,
	showMessageTime: true,
	hasSendButton: true,
	sendButtonContent: 'Send',
}


export default CommentsWrapper
