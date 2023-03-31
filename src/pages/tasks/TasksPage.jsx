import { CardTask } from '@/components'
import { ErrorFallback } from '@/pages'
import { useGetTasks } from '@/services/task'
import { setLog } from '@/utils'
import { ErrorBoundary } from 'react-error-boundary'
import styles from './tasks.module.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import stylesCard from '@/components/CardTask/cardTask.module.scss'

const TasksPage = () => {
	const { data: tasks } = useGetTasks()

	return (
		<ErrorBoundary FallbackComponent={ErrorFallback} onError={setLog}>
			<div className={styles.tasks}>
				<TransitionGroup>
					{tasks?.map((task) => (
						<CSSTransition key={task?.id} timeout={400} classNames={stylesCard}>
							<CardTask task={task} />
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
		</ErrorBoundary>
	)
}

export default TasksPage
