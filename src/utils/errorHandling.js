export const codeMatcherError = (errorCode) => {
	const codeMatcher = {
		ERR_NETWORK: 'Error de conexion al servidor',
		ERR_TIMEOUT: 'Se acabó el tiempo',
		ERR_CANCEL: 'Se canceló la petición',
		ERR_UNKNOWN: 'Error desconocido',
		ERR_400: 'Error 400',
		ERR_401: 'Error 401',
		ERR_403: 'Error 403',
	}

	const messaje = codeMatcher[errorCode] ?? 'Erro'

	return messaje
}
