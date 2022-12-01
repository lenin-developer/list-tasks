import styles from './AddTaskPage.module.scss'
import { FormAddTask } from './components'

export const AddTask = () => {
	return (
		<main className={styles.addTaskPage}>
			<FormAddTask />
		</main>
	)
}
