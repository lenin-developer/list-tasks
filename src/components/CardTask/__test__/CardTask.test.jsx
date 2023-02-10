import { CardTask } from '@/components'
import { usePatchTask, useDeleteTask } from '@/services/task/useTaskService'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { fireEvent, render, screen } from '@testing-library/react'
import styles from '../CardTask.module.scss'
import { taskMock } from './mock/mock'
// import second from '@/services/task/useTaskService'

jest.mock('@tanstack/react-query', () => ({
	...jest.requireActual('@tanstack/react-query'),
	useQueryClient: jest.fn(),
}))

jest.mock('@/services/task/useTaskService', () => ({
	...jest.requireActual('@/services/task/useTaskService'),
	usePatchTask: jest.fn(),
	useDeleteTask: jest.fn(),
}))

describe('CardTask: componente', () => {
	beforeEach(() => {
		usePatchTask.mockImplementation(() => ({}))
		useDeleteTask.mockImplementation(() => ({}))
	})

	afterEach(jest.clearAllMocks)

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

	it('deberia de llamar al funcion mutate de usePatchCheckedTaskId con argumetos {id:numbre, body:obje: {checked:bool}}', () => {
		const task = taskMock?.task[0]
		const data = {
			id: task?.id,
			body: { checked: !task?.checked },
		}
		const mutate = jest.fn()

		usePatchTask.mockImplementation(() => ({ mutate }))

		render(
			<QueryClientProvider client={queryClient}>
				<CardTask task={task} />
			</QueryClientProvider>
		)
		const btnIncompletar = screen.getByRole('button', { name: 'incompletar' })
		fireEvent.click(btnIncompletar)
		expect(mutate).toHaveBeenCalledTimes(1)
		expect(mutate).toHaveBeenCalledWith(data)
	})

	it('deberia de llamar a mutate de useDeleteTask con argumento id:number ', () => {
		const task = taskMock?.task[3]
		const data = task?.id
		const mutate = jest.fn()

		useDeleteTask.mockImplementation(() => ({ mutate }))

		render(
			<QueryClientProvider client={queryClient}>
				<CardTask task={task} />
			</QueryClientProvider>
		)
		const btnDelete = screen.getByRole('button', { name: 'Eliminar' })
		fireEvent.click(btnDelete)

		expect(mutate).toHaveBeenCalledTimes(1)
		expect(mutate).toHaveBeenCalledWith(data)
	})
})
