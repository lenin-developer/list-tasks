import { screen, render, fireEvent } from '@testing-library/react'
import ErrorCatch from '@/pages/ErrorCatch/ErrorCatch'

describe('pagina ErrorCatch', () => {
	test('deberia de redirecionarme a /app', () => {
		global.window = Object.create(window)
		const url = '/app'
		Object.defineProperty(window, 'location', {
			value: {
				href: url,
			},
		})

		render(<ErrorCatch />)

		const btn = screen.getByRole('button', { name: /ir al inicio/i })
		fireEvent.click(btn)
		expect(window.location.href).toBe(url)
	})
})
