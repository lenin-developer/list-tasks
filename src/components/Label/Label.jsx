import { any, string } from 'prop-types'
import styles from './Label.module.scss'

export const Label = ({ htmlFor, label }) => {
	return (
		<label htmlFor={htmlFor} className={styles.label}>
			{label}
		</label>
	)
}

Label.propTypes = {
	htmlFor: any,
	label: string,
}
