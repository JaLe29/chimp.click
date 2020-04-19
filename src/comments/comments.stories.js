import React from 'react'
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs'
import Comments from './comments'

export default {
	title: 'Comments',
	decorators: [withKnobs]
}

export const Component = () => (
	<Comments
		authKey={'a355c9c98b713de64f17d488cf465c69e8b624c4c1e347693108afc901baebe2'}
		code={'/test'}
		users={{}}
		user={text('user', 'Chimp')}
		authenticationType={'simple'}
		direction={select('bottom', ['top', 'bottom'])}
		messageHeaderClassName={''}
		messageTextClassName={''}
		textAreaClassName={''}
		messagesAreaClassName={''}
		wrapperClassName={''}
		showMessageTime={boolean('showMessageTime', true)}
		hasSendButton={boolean('hasSendButton', true)}
	/>
)
