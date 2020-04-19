import React from 'react'

const Error = ({ error }) => {
	return (
		<section>
			<p>
				Chimp.click
			</p>
			<b>
				{error.message}
			</b>
		</section>
	)
}

export default Error
