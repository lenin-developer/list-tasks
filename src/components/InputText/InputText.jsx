import styles from './inputText.module.scss'
import { string } from 'prop-types'
export const InputText = ({ label, name, ...res }) => {
	return label ? (
		<div className={styles.wrapper}>
			<label htmlFor={name} className={styles.label}>
				{label}
			</label>
			<input type='text' className={styles.input} name={name} autoComplete='off' {...res} />
		</div>
	) : (
		<input type='text' className={styles.input} name={name} autoComplete='off' {...res} />
	)
}

InputText.propTypes = {
	label: string,
	name: string,
}
