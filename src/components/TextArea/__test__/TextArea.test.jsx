import { render, screen } from '@testing-library/react'
import { TextArea } from '../TextArea'

describe('TextArea, Component', () => {
	const valueMock = 'test'
	it('deberia mostrar el texto que se pasa como props', () => {
		render(<TextArea defaultValue={valueMock} />)

		const TextAreaElement = screen.getByText(valueMock)
		const text = TextAreaElement.innerHTML
		expect(text).toBe(valueMock)
	})

	it('deberia mostrar un label con el texto que se pasa como props', () => {
		render(<TextArea label={valueMock} />)
		const label = screen.getByText(valueMock)
		const textLabel = label.innerHTML
		expect(textLabel).toBe(valueMock)
	})

	it('los atributos id y for deberian tener el mismo valor', () => {
		const idMock = 'idTest'
		const valueTextAreaMock = 'un texto'
		render(<TextArea label={valueMock} id={idMock} defaultValue={valueTextAreaMock} />)
		const valueAttrFor = screen.getByText(valueMock).getAttribute('for')
		const valueAttrId = screen.getByText(valueTextAreaMock).getAttribute('id')

		expect(valueAttrFor).toBe(valueAttrId)
	})

	it('No deberi de mostrar un mensjae de error, el valor del aria-invalid debe ser false', () => {
		const error = {}
		render(<TextArea error={error} defaultValue={valueMock} />)
		const textArea = screen.getByText(valueMock)
		const valueAttrAriaInvalid = textArea.getAttribute('aria-invalid')
		const numElementSpan = screen.queryAllByRole('alert')

		expect(valueAttrAriaInvalid).toBe('false')
		expect(numElementSpan.length).toBe(0)
	})

	it('deberi de mostrar un mensjae de error, el valor del aria-invalid debe ser true', () => {
		const error = { message: 'un error' }
		render(<TextArea error={error} defaultValue={valueMock} />)
		const textArea = screen.getByText(valueMock)
		const valueAttrAriaInvalid = textArea.getAttribute('aria-invalid')
		const numElementSpan = screen.queryAllByRole('alert')

		expect(valueAttrAriaInvalid).toBe('true')
		expect(numElementSpan.length).toBe(1)
	})
})
