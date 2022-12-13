/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { string, any, object } from 'prop-types'
import styles from './textArea.module.scss'
import { Label, ErrorMessage } from '@/components'

export const TextArea = forwardRef(({ label, id, error, ...res }, ref) => {
	return (
		<div>
			{label && <Label label={label} htmlFor={id} />}
			<textarea
				className={styles.textArea}
				autoComplete='off'
				rows='6'
				id={id}
				aria-invalid={error?.message ? 'true' : 'false'}
				{...res}
				ref={ref}
			/>
			{error?.message && <ErrorMessage text={error?.message} />}
		</div>
	)
})

TextArea.propTypes = {
	value: string,
	label: string,
	id: any,
	error: object,
}

TextArea.defaultProps = {}
