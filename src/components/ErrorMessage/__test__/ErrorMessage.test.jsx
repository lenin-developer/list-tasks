import { render, screen } from '@testing-library/react'
import { ErrorMessage } from '@/components'

describe('ErrorMessage: componente', () => {
	const textMock = 'test'
	beforeEach(() => {
		render(<ErrorMessage text={textMock} />)
	})
	it('deberia de mostrar el texto que se pasa a la props text', () => {
		const text = screen.getByText(textMock).innerHTML
		expect(text).toBe(textMock)
	})
	it('deberia de tener la clase  ', () => {
		// render(<ErrorMessage text={textMock} />)
		const className = 'errorMessage'
		const element = screen.getByText(textMock)
		expect(element).toHaveClass(className)
	})
})
