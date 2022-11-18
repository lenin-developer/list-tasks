import { Routes, Route } from 'react-router-dom'
import { Login, Home, Root, AddTask, TasksPage } from '@/pages'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Root />} />
			<Route path='/login' element={<Login />} />

			<Route path='/app' element={<Home />}>
				<Route path='addTask' element={<AddTask />} />
				<Route path='listTasks' element={<TasksPage />}>
					{/* <Route path='show' element={} /> este seria un modal */}
				</Route>
			</Route>
		</Routes>
	)
}

export default App
