import React, {useState, useCallback, useEffect} from 'react'
import ApolloClient from 'apollo-boost'
import {useQuery, useMutation} from '@apollo/react-hooks'
import {ApolloProvider} from '@apollo/react-hooks'
import TextArea from '../TextArea'
import {gql} from 'apollo-boost'
import Comment from './../Comment'

const API = 'https://suite.chimp.click/graphql'
// const API = 'http://localhost:8080/graphql'

const client = new ApolloClient({uri: API})

const GET_COMMENTS = gql`
  query getComments($code: String!) {
    getComments(where: { code: $code }) {
      id
      text
      createdAt
      user
    }
  }
`

const ADD_COMMENT = gql`
  mutation createComment($text: String!, $code: String!, $user: String) {
    createComment(data: { text: $text, code: $code, user: $user }) {
      id
      text
      createdAt
      user
    }
  }
`

const Comments = (props) => {
	const {code, authKey, users, user} = props

	const [clientData, setClientData] = useState([])
	const {loading, data, refetch} = useQuery(GET_COMMENTS, {variables: {code}, context: {headers: {authorization: authKey}}})
	const [addMessage] = useMutation(ADD_COMMENT)
	const [inputState, setInputState] = useState('ready')

	const handleSubmit = useCallback(
		async value => {
			setInputState('sending')
			const response = await addMessage({variables: {text: value, code, user}, context: {headers: {authorization: authKey}}})
			const comment = response.data.createComment
			setClientData([comment, ...clientData])
			setInputState('done')
		},
		[addMessage, authKey, clientData, code]
	)

	useEffect(() => {
		setClientData([])
		refetch()
	}, [refetch, code, authKey]);

	return (
		<div>
			{user && <TextArea onSubmit={handleSubmit} inputState={inputState} setInputState={setInputState} />}
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
		</div>
	)
}

const CommentsWrapper = ({code, authKey, users, user}) => {
	return (
		<ApolloProvider client={client}>
			<Comments code={code} authKey={authKey} users={users} user={user} />
		</ApolloProvider>
	)
}

export default CommentsWrapper
