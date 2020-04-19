import React from 'react'

const Error = ({ error }: any) => {
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
