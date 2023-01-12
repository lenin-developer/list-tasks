import styles from './AddTaskPage.module.scss'
import { FormAddTask } from './components'

const AddTaskPage = () => {
	return (
		<main className={styles.addTaskPage}>
			<FormAddTask />
		</main>
	)
}

export default AddTaskPage
