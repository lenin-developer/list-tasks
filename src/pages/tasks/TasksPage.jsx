import { CardTask } from '@/components'
import { ErrorFallback } from '@/pages'
import { useGetTasks } from '@/services/task'
import { setLog } from '@/utils'
import { ErrorBoundary } from 'react-error-boundary'
import styles from './tasks.module.scss'

const TasksPage = () => {
	const { data: tasks } = useGetTasks()

	return (
		<ErrorBoundary FallbackComponent={ErrorFallback} onError={setLog}>
			<div className={styles.tasks}>
				{tasks?.map((task) => (
					<CardTask key={task?.id} task={task} />
				))}
			</div>
		</ErrorBoundary>
	)
}

export default TasksPage
