import { useDeleteTask, usePatchCheckedTaskId } from '@/services/task'

import classNames from 'classnames'
import { bool, shape, string } from 'prop-types'
import { Button } from '..'
import styles from './cardTask.module.scss'

const CardTask = ({ task }) => {
	const { mutate: checketTask } = usePatchCheckedTaskId()
	const { mutate: deleteTask } = useDeleteTask()

	const cardTaskGreen = classNames({
		[styles.cardTask_green]: task.checked,
	})

	const taskUpateFilledEvent = () => {
		const data = {
			id: task?.id,
			body: { checked: !task?.checked },
		}

		checketTask(data)
	}

	const taskDeleteEvent = () => {
		deleteTask(task?.id)
	}

	return (
		<div className={`${styles.cardTask} ${cardTaskGreen}`}>
			<header className={`${styles.header}`}>
				<h3 className={styles.header__title}>{task?.title}</h3>
			</header>
			<section className={styles.description}>
				<p>{task?.description}</p>
			</section>
			<section className={styles.sectionBtns}>
				{task?.checked ? (
					<Button label={'incompletar'} color='warning' onClick={taskUpateFilledEvent} />
				) : (
					<Button label={'Completar'} color='success' onClick={taskUpateFilledEvent} />
				)}
				<Button label={'Editar'} />
				<Button label={'Eliminar'} color='danger' onClick={taskDeleteEvent} />
			</section>
		</div>
	)
}

CardTask.propTypes = {
	task: shape({
		description: string,
		title: string,
		checked: bool,
	}),
}

export default CardTask
