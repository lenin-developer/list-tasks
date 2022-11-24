import { render, screen } from '@testing-library/react'
import { Item } from '@/components/Menu/Item/Item'
import { MemoryRouter } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

describe('Item sub component of Menu', () => {
	const titleMock = 'Agregar tarea'
	const pathApp = '/app'
	const pathAddTask = 'addTask'

	test('deberia mostrar el titulo que se pasa como props(title)', () => {
		render(
			<MemoryRouter>
				<Item title={titleMock} to={pathAddTask}>
					<AiFillHome />
				</Item>
			</MemoryRouter>
		)
		const spanText = screen.getByText(titleMock).innerHTML
		expect(spanText).toBe(titleMock)
	})

	it('deberia agregar la clase css active', () => {
		render(
			<MemoryRouter initialEntries={[`${pathApp}/${pathAddTask}`]}>
				<Item title={titleMock} to={pathAddTask}>
					<AiFillHome />
				</Item>
			</MemoryRouter>
		)

		const itemElement = screen.getByTestId('item')
		expect(itemElement).toHaveClass('active')
		// screen.debug()
	})
	it('deberia solo tener la clase css Item', () => {
		render(
			<MemoryRouter initialEntries={[pathApp]}>
				<Item title={titleMock} to={pathAddTask}>
					<AiFillHome />
				</Item>
			</MemoryRouter>
		)

		const itemElement = screen.getByTestId('item')
		expect(itemElement).not.toHaveClass('active')
		// screen.debug()
	})
})
