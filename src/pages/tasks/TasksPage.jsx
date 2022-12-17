import styles from './tasks.module.scss'
import { useGetTasks } from '@/services/task'

export const TasksPage = () => {
	const { data: tasks } = useGetTasks()

	return (
		<div className={styles.tasks}>
			{tasks?.map((task) => (
				<div key={task?.id}>
					<p>{task?.title}</p>
				</div>
			))}
		</div>
	)
}
