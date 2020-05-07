import React from 'react'
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs'
import Comments from './comments'

export default {
	title: 'Comments',
	decorators: [withKnobs]
}

export const Component = () => (
	<Comments
		authKey={'1abcc544c87ba1bb2c3b96d7250074c957b53d62e66b701c501eb6aedadafaa66a89ee1194bb3a1772cf12875ef7595759c629c06491e9d10cb1440c37cea005'}
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
