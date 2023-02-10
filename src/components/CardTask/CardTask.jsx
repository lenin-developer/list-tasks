import { useState } from 'react'
import { useDeleteTask, usePatchTask } from '@/services/task'

import { Button, ModalTaskEdit } from '@/components'
import classNames from 'classnames'
import { bool, shape, string, number } from 'prop-types'
import styles from './cardTask.module.scss'

const CardTask = ({ task }) => {
	const [showModal, setShowModal] = useState(false)
	const { mutate: checketTask } = usePatchTask()
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

	const taskEditEvent = () => {
		setShowModal(!showModal)
	}

	return (
		<>
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
					<Button label={'Editar'} onClick={taskEditEvent} />
					<Button label={'Eliminar'} color='danger' onClick={taskDeleteEvent} />
				</section>
			</div>
			{showModal && <ModalTaskEdit setShow={taskEditEvent} title='Editar Task' task={task}></ModalTaskEdit>}
		</>
	)
}

CardTask.propTypes = {
	task: shape({
		id: number,
		description: string,
		title: string,
		checked: bool,
	}),
}

export default CardTask
