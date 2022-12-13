import { render, screen } from '@testing-library/react'
import { Label } from '../Label'

const textMock = 'test'
const id = 'id'
describe('Labal: component', () => {
	beforeEach(() => {
		render(<Label label={textMock} htmlFor={id} />)
	})

	it('deberia de renderizar el texto que se pasa como props', () => {
		const label = screen.getByText(textMock)
		const textValue = label.innerHTML
		expect(textValue).toBe(textMock)
	})

	it('deberia colocar el id que se pasa como props', () => {
		const label = screen.getByText(textMock)
		const idValue = label.getAttribute('for')
		expect(idValue).toBe(id)
	})
})
