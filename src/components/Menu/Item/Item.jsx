import { node, string } from 'prop-types'
import { NavLink, useHref } from 'react-router-dom'
import styles from './item.module.scss'

export const Item = ({ title, to, children }) => {
	const href = useHref()

	const active = href === `/app/${to}`
	return (
		<li className={`${styles.item} ${active ? styles.active : ''}`} data-testid='item'>
			<NavLink to={to} aria-label={title}>
				<span className={styles.item__icon}>{children}</span>
				<span className={styles.item__title}>{title}</span>
			</NavLink>
		</li>
	)
}

Item.propTypes = {
	title: string.isRequired,
	to: string.isRequired,
	children: node.isRequired, // icon SVG
}
