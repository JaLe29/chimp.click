import React, {useCallback} from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import css from './comment.module.scss'

const Comment = ({showMessageTime, messageTextClassName, messageHeaderClassName, text, user, createdAt, users, authenticationType}) => {
	const getDistance = useCallback(
		() => formatDistanceToNow(new Date(createdAt), {addSuffix: true}),
		[createdAt]
	)

	const isSimpleAuth = authenticationType === 'simple'

	return (
		<div className={css.comment}>
			{users[user] && users[user].image && <img className={css.profilePhoto} src={users[user].image} alt={users[user].name} />}
			<div>
				<div className={[css.headerWrapper, messageHeaderClassName].join(' ')}>
					<div className={css.name}>
						{
							isSimpleAuth
								? user
								: users[user] ? users[user].name : 'Unknown user'
						}
					</div>
					{
						showMessageTime && (
							<div className={css.date}>
								{getDistance()}
							</div>
						)
					}
				</div>
				<p className={[css.text, messageTextClassName].join(' ')}>
					{text}
				</p>
			</div>
		</div>
	)
}

export default Comment
