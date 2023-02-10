import classnames from 'classnames'
import { oneOf, string } from 'prop-types'
import styles from './Button.module.scss'

export const Button = ({ label, size, color, ...res }) => {
	// const btnSize = styles[`button_${size}`] ?? styles.button_md
	const css = classnames({
		[styles[`button_${color}`] ?? styles.button_primary]: color,
		[styles[`button_${size}`] ?? styles.button_md]: size,
		[styles.isDisabled]: res?.disabled,
	})

	return (
		<button type='button' className={`${styles.button} ${css}`} {...res}>
			{label}
		</button>
	)
}

Button.propTypes = {
	label: string,
	size: oneOf(['xs', 'sm', 'md', 'lg']),
	color: oneOf(['primary', 'success', 'danger', 'warning']),
}

Button.defaultProps = {
	size: 'md',
	color: 'primary',
}
