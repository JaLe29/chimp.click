import {storiesOf} from '@storybook/react'
import React from 'react'
import {storyConfig, storyConfigHelpers} from '../../../scripts/storybook/storyConfig'
import Comments from './Comments'

const name = 'Comments'
const category = `${storyConfig.corePrefix}${name}`
const config = storyConfigHelpers.getConfig({name})

function CommentsDemo () {
	const users = {}
	return (
		<Comments
			authKey={'a355c9c98b713de64f17d488cf465c69e8b624c4c1e347693108afc901baebe2'}
			code={'/test'}
			users={users}
			user={'Jakub'}
			authenticationType={'simple'}
			direction={'bottom'}
			messageHeaderClassName={''}
			messageTextClassName={''}
			textAreaClassName={''}
			messagesAreaClassName={''}
			wrapperClassName={''}
			showMessageTime={false}
			hasSendButton={true}
		/>
	)
}

storiesOf(category, module).add('Comments', CommentsDemo, config)