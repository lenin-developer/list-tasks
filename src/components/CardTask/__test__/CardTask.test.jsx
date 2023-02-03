import { CardTask } from '@/components'
import { render } from '@testing-library/react'
import styles from '../CardTask.module.scss'
import { taskMock } from './mock/mock'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import second from '@/services/task/useTaskService'

jest.mock('@tanstack/react-query', () => ({
	...jest.requireActual('@tanstack/react-query'),
	useQueryClient: jest.fn(),
}))
describe('CardTask: componente', () => {
	const queryClient = new QueryClient()
	it('deberia tener la clase cardTask_green ', () => {
		const task = taskMock?.task[0]
		const claseCss = styles.cardTask_green
		const { container } = render(
			<QueryClientProvider client={queryClient}>
				<CardTask task={task} />
			</QueryClientProvider>
		)
		const card = container.querySelector('div')
		expect(card).toHaveClass(claseCss)
	})

	it('No deberia tener la clase cardTask_green', () => {
		const task = taskMock.task[1]
		const claseCss = styles.cardTask_green
		const { container } = render(
			<QueryClientProvider client={queryClient}>
				<CardTask task={task} />
			</QueryClientProvider>
		)
		const card = container.querySelector('div')
		expect(card).not.toHaveClass(claseCss)
	})
})
