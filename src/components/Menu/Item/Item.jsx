import { string, node } from 'prop-types'
import styles from './item.module.css'

export const Item = ({ title, children }) => {
	return (
		<li className={styles.item}>
			<a href='#' aria-label={title}>
				<span className={styles.item__icon}>{children}</span>
				<span className={styles.item__title}>{title}</span>
			</a>
		</li>
	)
}

Item.propTypes = {
	title: string.isRequired,
	children: node.isRequired, // icon SVG
}
