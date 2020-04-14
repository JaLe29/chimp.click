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
			authKey={'11fba3722079a7e24f5fd8de8f8351dac12878d3fb672f82c6503012cc2124d4'}
			code={'/aw'}
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
		/>
	)
}

storiesOf(category, module).add('Comments', CommentsDemo, config)