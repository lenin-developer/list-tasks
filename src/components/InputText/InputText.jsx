/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import styles from './inputText.module.scss'
import { string, object } from 'prop-types'
import { ErrorMessage, Label } from '@/components'

export const InputText = forwardRef(({ label, id, error, ...res }, ref) => {
	return (
		<div className={styles.wrapper}>
			{label && <Label htmlFor={id} label={label} />}
			<input
				id={id}
				type='text'
				autoComplete='off'
				aria-invalid={error?.message ? 'true' : 'false'}
				className={styles.input}
				{...res}
				ref={ref}
			/>
			{error?.message && <ErrorMessage text={error?.message} />}
		</div>
	)
})

InputText.propTypes = {
	label: string,
	id: string,
	error: object,
}
