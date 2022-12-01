import { string } from 'prop-types'
import styles from './textArea.module.scss'

export const TextArea = ({ value, ...res }) => {
	return <textarea className={styles.textArea} value={value} autoComplete='off' rows='6' {...res} />
}

TextArea.propTypes = {
	value: string,
}

TextArea.defaultProps = {}
