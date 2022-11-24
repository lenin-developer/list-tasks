import { toggleAtrrValue, toggleCss } from '@/utils'
import { func } from 'prop-types'
import { useRef } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsListTask } from 'react-icons/bs'
import { GrAddCircle } from 'react-icons/gr'
import { Item } from './Item/Item'
import styles from './menu.module.scss'

const Menu = ({ resizeLayout }) => {
	const nav = useRef(null)

	const resizeMenu = () => {
		toggleCss(nav, styles.active)
		toggleAtrrValue(nav, 'ariaExpanded', 'false', 'true')
		resizeLayout()
	}

	return (
		<nav ref={nav} className={styles.navigation} aria-expanded='false'>
			<ul>
				<Item title='Home' to='#' key={1}>
					<AiFillHome />
				</Item>
				<Item title='Agregar tarea' to='addTask' key={2}>
					<GrAddCircle />
				</Item>
				<Item title='Lista de tareas' to='listTasks' key={3}>
					<BsListTask />
				</Item>
			</ul>
			<div className={styles.toggle} onClick={resizeMenu} data-testid='btn'></div>
		</nav>
	)
}

Menu.propTypes = {
	resizeLayout: func,
}
Menu.defaultprops = {
	resizeLayout: () => {},
}

export default Menu
