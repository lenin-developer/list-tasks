import { func, node, string } from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './modal.module.scss'
const Modal = ({ children, title, setShow }) => {
	return (
		<section className={styles.overlay}>
			<div className={styles.overlay__modal}>
				<header className={styles.modal__header}>
					<h2 className={styles.header__title}>{title}</h2>
					<button className={styles.header__closeBtn} onClick={setShow}>
						<AiOutlineClose />
					</button>
				</header>
				<main>{children}</main>
			</div>
		</section>
	)
}

Modal.propTypes = {
	children: node,
	title: string,
	setShow: func.isRequired,
}
export default Modal
