import { render, screen, fireEvent } from '@testing-library/react'
import { Home } from '@/pages/home/Home'
import { MemoryRouter } from 'react-router-dom'
import * as utils from '@/utils/toggleAtrrHtml'
import styles from '../../../src/pages/home/home.module.scss'

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHref: jest.fn(),
}))
describe('Home: Page', () => {
	it('la función resizeLayout debe invocar a toggleCss con los siguientes parametros(Object, styles.active) ', () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		)

		const toggleCssMock = jest.spyOn(utils, 'toggleCss').mockImplementation(jest.fn())
		const btn = screen.getByTestId('btn')
		fireEvent.click(btn)

		expect(toggleCssMock).toHaveBeenCalledWith(expect.any(Object), styles.active)
	})
})
