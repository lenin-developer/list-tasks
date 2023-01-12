import styles from './tasks.module.scss'
import { useGetTasks } from '@/services/task'

const TasksPage = () => {
	const { data: tasks } = useGetTasks()

	// console.log(tasks)
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

export default TasksPage
