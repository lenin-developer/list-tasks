import propTypes from 'prop-types'
import styles from 'menu.module.css'

const Menu = ({ children }) => {
	return (
		<>
			<nav className={styles.navigation}>
				children
				<div className={styles.toggle}></div>
			</nav>
		</>
	)
}

Menu.propTypes = {
	children: propTypes.any,
}

Menu.defaultProps = {
	children: <></>,
}

export default Menu
