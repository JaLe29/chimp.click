import React, { useCallback } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './comment.scss'

const Comment = ({ showMessageTime, messageTextClassName, messageHeaderClassName, text, user, createdAt, users, authenticationType }: any) => {
	const getDistance = useCallback(
		() => formatDistanceToNow(new Date(createdAt), { addSuffix: true }),
		[createdAt]
	)

	const isSimpleAuth = authenticationType === 'simple'

	return (
		<div className={'comment'}>
			{users[user] && users[user].image && <img className={'profilePhoto'} src={users[user].image} alt={users[user].name} />}
			<div>
				<div className={['headerWrapper', messageHeaderClassName].join(' ')}>
					<div className={'name'}>
						{
							isSimpleAuth
								? user
								: users[user] ? users[user].name : 'Unknown user'
						}
					</div>
					{
						showMessageTime && (
							<div className={'date'}>
								{getDistance()}
							</div>
						)
					}
				</div>
				<p className={['text', messageTextClassName].join(' ')}>
					{text}
				</p>
			</div>
		</div>
	)
}

export default Comment
