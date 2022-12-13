import { render, screen } from '@testing-library/react'
import { Button } from '@/components'
import styles from '../Button.module.scss'
describe('Button: component', () => {
	const label = 'test'

	it('deberia mostrar el texto que se pasa al label prop', () => {
		render(<Button label={label} />)
		const text = screen.getByText(label).innerHTML
		expect(label).toBe(text)
	})

	it('deberia aplicar por defecto la clase button_md', () => {
		render(<Button label={label} />)
		const btn = screen.getByRole('button')
		expect(btn).toHaveClass(styles.button_md)
	})
	it('deberia aplicar la clase button_xs', () => {
		render(<Button label={label} size={'xs'} />)
		const btn = screen.getByRole('button')
		expect(btn).toHaveClass(styles.button_xs)
	})

	it('deberia aplicar la clase button_sm', () => {
		render(<Button label={label} size={'sm'} />)
		const btn = screen.getByRole('button')
		expect(btn).toHaveClass(styles.button_sm)
	})

	it('deberia aplicar la clase button_lg', () => {
		render(<Button label={label} size={'lg'} />)
		const btn = screen.getByRole('button')
		expect(btn).toHaveClass(styles.button_lg)
	})

	it('deberia aplicar la clase button_disabled', () => {
		render(<Button label={label} disabled />)
		const btn = screen.getByRole('button')
		expect(btn).toHaveClass(styles.button_disabled)
	})
})
