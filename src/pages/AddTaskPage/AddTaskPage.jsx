import styles from './AddTaskPage.module.scss'
import { FormAddTask } from './components'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorCatch } from '@/pages'
import { setLog } from '@/utils'

const AddTaskPage = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorCatch} onError={setLog}>
			<main className={styles.addTaskPage}>
				<FormAddTask />
			</main>
		</ErrorBoundary>
	)
}

export default AddTaskPage
