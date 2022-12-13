import { string } from 'prop-types'
import styles from './errorMessage.module.scss'

export const ErrorMessage = ({ text }) => {
	return (
		<span className={styles.errorMessage} role='alert'>
			{text}
		</span>
	)
}

ErrorMessage.propTypes = {
	text: string,
}
