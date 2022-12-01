import classnames from 'classnames'
import { oneOf, string } from 'prop-types'
import styles from './Button.module.scss'

export const Button = ({ label, size, ...res }) => {
	const btnSize = styles[`button_${size}`] ?? styles.button_md
	const classDisabled = classnames({
		[styles.button_disabled]: res?.disabled,
	})

	return (
		<button className={`${styles.button} ${btnSize} ${classDisabled}`} type='button' {...res}>
			{label}
		</button>
	)
}

Button.propTypes = {
	label: string,
	size: oneOf(['xs', 'sm', 'md', 'lg']),
}

Button.defaultProps = {
	size: 'md',
}
