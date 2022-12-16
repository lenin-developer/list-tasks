import { getInLocalStorage, saveInLocalStorage } from '@/utils/localStorage'
import axios from 'axios'
import { dominioWeb } from '@/constants/endpoints'
import { localStorage } from '@/constants/localStorageKeys'
// aqui solo guardamos un token en la cahe solo para poder simular
saveInLocalStorage(localStorage.key.token, '123456')

export const DominioQuery = axios.create({
	baseURL: dominioWeb.root,
	responseType: 'json',
})

const updateHeader = (request) => {
	const token = getInLocalStorage(localStorage.key.token)
	const newHeaders = {
		'Content-Type': 'application/json',
		...request.headers,
		Authorization: token,
	}
	request.headers = newHeaders
	return request
}

DominioQuery.interceptors.request.use((request) => {
	if (request.url?.includes('assets')) return request
	return updateHeader(request)
})

DominioQuery.interceptors.response.use(
	(response) => {
		// -todo ok
		// console.log('response', response)
		// alert('response', response)
		return response
	},
	(error) => {
		// aqui manejar los errores
		// console.log('error', error)
		alert('error', error)
	}
)
