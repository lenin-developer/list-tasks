import { InputText, TextArea, Button } from '@/components'
import styles from './formAddTask.module.scss'

export const FormAddTask = () => {
	const addTaskEvent = (e) => {
		e.preventDefault()
		alert('achis')
	}

	return (
		<form className={styles.form}>
			<InputText label='Title Task' />
			<TextArea />
			<Button label='Agregar' type='submit' size='lg' onClick={(e) => addTaskEvent(e)} />
		</form>
	)
}
