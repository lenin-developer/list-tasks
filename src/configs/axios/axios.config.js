import { getInLocalStorage, saveInLocalStorage } from '@/utils/localStorage'
import axios from 'axios'

// aqui solo guardamos un token en la cahe solo para poder simular
saveInLocalStorage('token', '123456')

export const query = axios.create({
	baseURL: 'http://localhost:3004',
	responseType: 'json',
})

const updateHeader = (request) => {
	const token = getInLocalStorage('token')
	const newHeaders = {
		'Content-Type': 'application/json',
		...request.headers,
		Authorization: token,
	}
	request.headers = newHeaders
	return request
}

query.interceptors.request.use((request) => {
	if (request.url?.includes('assets')) return request
	return updateHeader(request)
})

query.interceptors.response.use(
	(response) => {
		// -todo ok
		// console.log('response', response)
		alert('response', response)
		return response
	},
	(error) => {
		// aqui manejar los errores
		// console.log('error', error)
		alert('error', error)
	}
)
