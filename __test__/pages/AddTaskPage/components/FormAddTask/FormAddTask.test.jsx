import { FormAddTask } from '@/pages/AddTaskPage/components'
import { act, fireEvent, render, screen } from '@testing-library/react'

describe('FormAddTask: page,type: integration', () => {
	it('deberia tener por defecto el boton bloqueado', () => {
		render(<FormAddTask />)
		const btn = screen.getByRole('button')
		const disabledValue = btn.getAttribute('disabled')

		expect(disabledValue).not.toBeNull()
	})

	it('deberia de estar el boton bloqueado "disabled" (1)', async () => {
		render(<FormAddTask />)

		const elements = screen.getAllByRole('textbox')
		const btn = screen.getByRole('button')
		const [input] = elements
		await act(async () => {
			fireEvent.input(input, { target: { value: 'test' } })
		})
		const disabledValue = btn.getAttribute('disabled')
		expect(disabledValue).not.toBeNull()
	})

	it('deberia de estar el boton bloqueado "disabled" (2)', async () => {
		render(<FormAddTask />)

		const elements = screen.getAllByRole('textbox')
		const btn = screen.getByRole('button')
		const [textArea] = elements
		await act(async () => {
			fireEvent.change(textArea, { target: { value: 'test' } })
		})
		const disabledValue = btn.getAttribute('disabled')
		expect(disabledValue).not.toBeNull()
	})

	it('deberia de estar el boton activo', async () => {
		render(<FormAddTask />)

		const elements = screen.getAllByRole('textbox')
		const [inputt, textArea] = elements

		await act(async () => {
			fireEvent.change(inputt, { target: { value: 'test' } })
			fireEvent.change(textArea, { target: { value: 'test' } })
		})
		const btn = screen.getByRole('button')
		const disabledValue = btn.getAttribute('disabled')

		expect(disabledValue).toBeNull()
	})
})
