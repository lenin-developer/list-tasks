import { func, string } from 'prop-types'

const ErrorFallback = ({ error, resetErrorBoundary }) => {
	return (
		<div>
			<p>ups, ocurrio un error inesperado</p>
			<p>{error?.message}</p>
			<button onClick={resetErrorBoundary}>refrescar</button>
		</div>
	)
}

ErrorFallback.propTypes = {
	error: string,
	resetErrorBoundary: func,
}

export default ErrorFallback
