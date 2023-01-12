import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import App from './App'
import { toasTifyConfig } from '@/configs/ui'

import 'react-toastify/dist/ReactToastify.min.css'
import './styles/normalize.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
				<ReactQueryDevtools initialIsOpen={false} />
				<ToastContainer {...toasTifyConfig} />
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
)
