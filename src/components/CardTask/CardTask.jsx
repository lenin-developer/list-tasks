import { usePatchCheckedTaskId } from '@/services/task'

import classNames from 'classnames'
import { bool, shape, string } from 'prop-types'
import { Button } from '..'
import styles from './cardTask.module.scss'

const CardTask = ({ task }) => {
	const { mutate } = usePatchCheckedTaskId()

	const cardTaskGreen = classNames({
		[styles.cardTask_green]: task.checked,
	})

	const taskUpateFilledEvent = () => {
		const data = {
			id: task?.id,
			body: { checked: !task?.checked },
		}

		mutate(data)
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
					<Button label={'incompletar'} onClick={taskUpateFilledEvent} />
				) : (
					<Button label={'Completar'} onClick={taskUpateFilledEvent} />
				)}
				<Button label={'Editar'} />
				<Button label={'Eliminar'} />
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
