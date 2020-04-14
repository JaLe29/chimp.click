import React, {useState, useEffect} from 'react'
import css from './textArea.module.scss'

const ENABLE_TIMEOUT_SEND = false
const TIMEOUT = 2000

const TextArea = ({className, onSubmit, setInputState, inputState, placeholder}) => {
	const [isFocused, setFocused] = useState(false)
	const [value, setValue] = useState('')

	let blockEnter = false

	useEffect(() => {
		let timer
		if (inputState === 'done') {
			if (ENABLE_TIMEOUT_SEND) {
				timer = setTimeout(() => {
					setFocused(false)
					setInputState('ready')
				}, TIMEOUT)
			}
		}

		return () => {
			if (timer) clearTimeout(timer)
		}
	}, [inputState, setInputState])

	const handleChange = e => {
		if (e.keyCode === 13 && e.shiftKey === false) {
			blockEnter = true

			const transformed = value.trim()
			if (transformed.length === 0) return
			onSubmit(transformed)
			setValue('')
			return
		}
		if (blockEnter) {
			blockEnter = false
			return
		}
		const text = e.target.value || ''
		if (text === '\n') return
		setValue(text)
	}

	const cls = [css.textArea, className]
	if (!isFocused) cls.push(css.notFocused)
	else cls.push(css.normal)

	return (
		<>
			{
				ENABLE_TIMEOUT_SEND && ['sending', 'done'].includes(inputState)
					? (
						'DONE'
					)
					: (
						<textarea
							value={value}
							onChange={handleChange}
							onKeyDown={handleChange}
							onFocus={() => setFocused(true)}
							onBlur={() => setFocused(false)}
							className={cls.join(' ')}
							placeholder={placeholder}
						/>
					)
			}
			{/* <div className={css.promo}>
				Power by <a href='https://chimp.click' rel='noopener noreferrer' target='_blank'>chimp.click</a>
			</div> */}
		</>
	)
}

export default React.memo(TextArea)
