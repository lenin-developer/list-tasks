import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login, Home, Root } from '@/pages'
import { path } from '@/constants/routers'
import { useOnLine } from '@/hooks'
import { LoadingPage } from '@/components'
const AddTaskPage = lazy(() => import('@/pages/AddTaskPage/AddTaskPage'))
const TasksPage = lazy(() => import('@/pages/tasks/TasksPage'))

function App() {
	useOnLine()

	return (
		<>
			<Routes>
				<Route path='/' element={<Root />} />
				<Route path={path.login} element={<Login />} />

				<Route path={path.app} element={<Home />}>
					<Route
						path={path.addTask}
						element={
							<Suspense fallback={<LoadingPage />}>
								<AddTaskPage />
							</Suspense>
						}
					/>
					<Route
						path={path.listTasks}
						element={
							<Suspense fallback={<LoadingPage />}>
								<TasksPage />
							</Suspense>
						}
					>
						{/* <Route path='show' element={} /> este seria un modal */}
					</Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
