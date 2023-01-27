import { bool, shape, string } from 'prop-types'
import { Button } from '..'
import styles from './cardTask.module.scss'

const CardTask = ({ task }) => {
	return (
		<div className={`${styles.cardTask} `}>
			<header className={styles.cardTask__title}>
				<h3>{task?.title}</h3>
			</header>
			<section className={styles.description}>
				<p>{task?.description}</p>
			</section>
			<section className={styles.sectionBtns}>
				<Button label={'Completar'} />
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
