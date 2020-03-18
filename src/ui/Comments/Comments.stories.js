import {storiesOf} from '@storybook/react'
import React from 'react'
import {storyConfig, storyConfigHelpers} from '../../../scripts/storybook/storyConfig'
import Comments from './Comments'

const name = 'Comments'
const category = `${storyConfig.corePrefix}${name}`
const config = storyConfigHelpers.getConfig({name})

function CommentsDemo () {
	const users = {
		'a': {
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKxSbTqx77ZQMe1SNwZ5ejp9e9p_vD8cpEteM-u6mWff4gg4sX',
			name: 'Domísek',
		},
		'b': {},
		'c': {
			image: 'https://media-exp1.licdn.com/dms/image/C5603AQFqH5t8pWAOwg/profile-displayphoto-shrink_200_200/0?e=1590019200&v=beta&t=mY6gKgajLfWBhgnVXwWXrSivNC8UEFB52YEeNBI6XYI',
			name: 'Jakub Löffelmann'
		},
	}
	return (
		<Comments
			authKey={'4060b75f4e46dc2ad863017dfa09575be8aac3c3448fe74cab08dfc4d7ad0131'}
			code={'about'}
			users={users}
			user={'lhjGswAZ37AsGyzUQX+FxdJxrqa6q/nwFt9hz2s/p22DnnusyknW1IWhLQlmZkBGFYlupIPtheVRla7aZnNx0GEP/1jwhMDt9kQQjG5XY36KhVTHuCFkUn1InKD/R2mNurRhmPKNyAn5dFFap/K/R4yWegbYTqdOh/zxMFVtBXOvRUIXotUvj5v6hk+0gI6pd7tRHhUM17npDxqstSdwLtZ6Zv+m75yaVtD65YZ20R8tlPeTOpm1Cnv+Mwnra0Au/rfvXLuwCHuA5L1Bbc4GANfMvlc7yz8pEKBHdScGASiqrijQtT0isNqH8ZsQpEx8uUg3vaFl0If7EzwbjBAWxQ=='}
		/>
	)
}

storiesOf(category, module).add('Comments', CommentsDemo, config)
