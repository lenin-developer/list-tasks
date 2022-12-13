import { render, screen } from '@testing-library/react'
import { InputText } from '../InputText'

describe('InputText: component', () => {
	const labelMock = 'test'
	it('deberia de renderizar con las opciones por defecto, type="text" autoComplete="off" ', () => {
		const textMock = 'text'
		const offMock = 'off'
		render(<InputText />)
		const element = screen.getByRole('textbox')
		const typeAttrValue = element.getAttribute('type')
		const autoCompleteAttrValue = element.getAttribute('autoComplete')

		expect(typeAttrValue).toBe(textMock)
		expect(autoCompleteAttrValue).toBe(offMock)
	})

	it('deberia de renderizar un label con el texto pasado como props', () => {
		render(<InputText label={labelMock} />)
		const label = screen.getByText(labelMock)
		const textLabel = label.innerHTML
		expect(textLabel).toBe(labelMock)
	})

	it('deberia de concidir el htmlFor y el id ', () => {
		render(<InputText label={labelMock} id='testId' />)
		const label = screen.getByText(labelMock)
		const imput = screen.getByRole('textbox')
		const forAttrValue = label.getAttribute('for')
		const idAttrValue = imput.getAttribute('id')
		expect(forAttrValue).toBe(idAttrValue)
	})

	it('No deberia mostrar un mensaje de error y el attr "aria-invalid" debe ser false', () => {
		const error = {}
		render(<InputText error={error} />)
		const input = screen.getByRole('textbox')
		const invalidAttrValue = input.getAttribute('aria-invalid')
		const numElementsAttrAler = screen.queryAllByRole('alert')
		expect(numElementsAttrAler.length).toBe(0)
		expect(invalidAttrValue).toBe('false')
	})

	it('deberia mostrar un mensaje de error y el attr "aria-invalid" debe ser true', () => {
		const error = { message: 'un errro' }
		render(<InputText error={error} />)
		const input = screen.getByRole('textbox')
		const invalidAttrValue = input.getAttribute('aria-invalid')
		const numElementsAttrAler = screen.queryAllByRole('alert')
		expect(numElementsAttrAler.length).toBe(1)
		expect(invalidAttrValue).toBe('true')
	})
})
