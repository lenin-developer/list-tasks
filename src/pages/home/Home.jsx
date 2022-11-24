import { Menu } from '@/components'
import { toggleCss } from '@/utils'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './home.module.scss'

export const Home = () => {
	const layout = useRef(null)

	const resizeLayout = () => {
		toggleCss(layout, styles.active)
	}

	return (
		<div ref={layout} className={styles.home}>
			<div className={styles.home__spaceMenu}>
				<Menu resizeLayout={resizeLayout} />
			</div>
			<Outlet />
		</div>
	)
}
