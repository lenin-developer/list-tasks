import styles from './home.module.scss'
import { Outlet } from 'react-router-dom'
import { Menu } from '@/components'
import { useRef } from 'react'
import { toggleCss } from '@/utils'
// import {  } from 'prop-types'
export const Home = () => {
	const layout = useRef(null)

	const resizeStyles = () => {
		toggleCss(layout, styles.active)
	}

	return (
		<div className={styles.home}>
			<div ref={layout} className={styles.home__spaceMenu}>
				<Menu resizeStyles={resizeStyles} />
			</div>
			<Outlet />
		</div>
	)
}
