import { Routes, Route } from 'react-router-dom'
import { Login, Home, Root, AddTaskPage, TasksPage } from '@/pages'
import { path } from '@/constants/routers'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Root />} />
			<Route path={path.login} element={<Login />} />

			<Route path={path.app} element={<Home />}>
				<Route path={path.addTask} element={<AddTaskPage />} />
				<Route path={path.listTasks} element={<TasksPage />}>
					{/* <Route path='show' element={} /> este seria un modal */}
				</Route>
			</Route>
		</Routes>
	)
}

export default App
