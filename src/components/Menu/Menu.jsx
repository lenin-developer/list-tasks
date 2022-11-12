import { toggleCss } from '@/utils'
import { useRef } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { Item } from './Item/Item'
import styles from './menu.module.css'
import { BsListTask } from 'react-icons/bs'
import { GrAddCircle } from 'react-icons/gr'

const Menu = () => {
	const nav = useRef(null)

	const resizeMenu = () => {
		toggleCss(nav, styles.active)
	}

	return (
		<nav ref={nav} className={styles.navigation}>
			<ul>
				<Item title='Home' key={1}>
					<AiFillHome />
				</Item>
				<Item title='Agregar tarea' key={2}>
					<GrAddCircle />
				</Item>
				<Item title='Lista de tareas' key={3}>
					<BsListTask />
				</Item>
			</ul>
			<div className={styles.toggle} onClick={resizeMenu}></div>
		</nav>
	)
}

export default Menu
