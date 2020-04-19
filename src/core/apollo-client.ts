import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { HOST, SSL_ENABLED } from './config'

const uri = (protocol) => `${protocol}://${HOST}/graphql`

export default function apolloClient(clientauthorization) {
	const httpLink = createHttpLink({
		uri: uri(`http${SSL_ENABLED ? 's' : ''}`),
	})

	const wsLink = new WebSocketLink({
		uri: uri(`ws${SSL_ENABLED ? 's' : ''}`),
		options: {

			lazy: true,
			reconnect: true,
			connectionParams: () => {
				return {
					headers: {
						clientauthorization,
					},
				}
			},

		},
	})

	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				clientauthorization,
			},
			onError: ({ graphQLErrors, networkError }) => {
				if (graphQLErrors) {
					console.error(graphQLErrors)
				}

				if (networkError) console.error(`[Network error]: ${networkError}`)
				return
			}
		}
	})

	return new ApolloClient({

		link: split(
			({ query }) => {
				const definition = getMainDefinition(query)
				return (
					definition.kind === 'OperationDefinition' &&
					definition.operation === 'subscription'
				)
			},
			wsLink,
			authLink.concat(httpLink),
		)
		,
		cache: new InMemoryCache(),

	})
}
