import * as utils from '@/utils/toggleAtrrHtml'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Menu from '../Menu'
import styles from '../../../components/Menu/menu.module.scss'

const mockResizeLayout = jest.fn()

describe('Menu Componente', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Menu resizeLayout={mockResizeLayout} />
			</MemoryRouter>
		)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})
	it('deberia ejecutar la funcion que se pasa como prop', () => {
		const btn = screen.getByTestId('btn')
		fireEvent.click(btn)

		expect(mockResizeLayout).toHaveBeenCalledTimes(1)
	})

	it('deberia invocar a la función toggleCss con los siguientes parametros(objetc,styles.active)', () => {
		const mockRequest = jest.spyOn(utils, 'toggleCss').mockImplementation(jest.fn())

		const btn = screen.getByTestId('btn')
		fireEvent.click(btn)

		expect(mockRequest).toHaveBeenCalledTimes(1)
		expect(mockRequest).toHaveBeenCalledWith(expect.any(Object), styles.active)
	})

	it('deberia invocar a la funcion toggleAtrrValue con los siguentes parametro(object,"ariaExpanded","false","true" )', () => {
		const mockToggleAtrrValue = jest.spyOn(utils, 'toggleAtrrValue').mockImplementation(jest.fn())
		const btn = screen.getByTestId('btn')
		fireEvent.click(btn)

		expect(mockToggleAtrrValue).toBeCalledTimes(1)
		expect(mockToggleAtrrValue).toHaveBeenCalledWith(expect.any(Object), 'ariaExpanded', 'false', 'true')
	})
})
