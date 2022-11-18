import { toggleCss } from '@/utils'
import { func } from 'prop-types'
import { useRef } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsListTask } from 'react-icons/bs'
import { GrAddCircle } from 'react-icons/gr'
import { Item } from './Item/Item'
import styles from './menu.module.scss'

const Menu = ({ resizeStyles }) => {
	const nav = useRef(null)

	const resizeMenu = () => {
		toggleCss(nav, styles.active)
		resizeStyles()
	}

	return (
		<nav ref={nav} className={styles.navigation}>
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
			<div className={styles.toggle} onClick={resizeMenu}></div>
		</nav>
	)
}

Menu.propTypes = {
	resizeStyles: func,
}
Menu.defaultprops = {
	resizeStyles: () => {},
}

export default Menu
