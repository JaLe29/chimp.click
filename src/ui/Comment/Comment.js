import React, {useCallback} from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import css from './comment.module.scss'

const Comment = ({text, user, createdAt, users}) => {
	const getDistance = useCallback(
		() => formatDistanceToNow(new Date(createdAt), {addSuffix: true}),
		[createdAt]
	)

	return (
		<div className={css.comment}>
			{users[user] && users[user].image && <img className={css.profilePhoto} src={users[user].image} alt={users[user].name} />}
			<div>
				<div className={css.headerWrapper}>
					<div className={css.name}>
						{users[user] ? users[user].name : 'Unknown user'}
					</div>
					<div className={css.date}>
						{getDistance()}
					</div>
				</div>
				<p className={css.text}>{text}</p>
			</div>
		</div>
	)
}

export default Comment
