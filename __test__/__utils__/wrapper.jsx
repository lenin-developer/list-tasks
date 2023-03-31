/* eslint-disable no-console */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
export const createWrapper = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
		logger: {
			log: console.log,
			warn: console.warn,
			error: () => {},
		},
	})

	// eslint-disable-next-line react/display-name, react/prop-types
	return ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
