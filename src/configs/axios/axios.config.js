import axios from 'axios'
import { toast } from 'react-toastify'
import { getInLocalStorage, saveInLocalStorage } from '@/utils/localStorage'
import { dominioWeb } from '@/constants/endpoints'
import { localStorage } from '@/constants/localStorageKeys'
import { codeMatcherError } from '@/utils/errorHandling'
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
		return response
	},
	(error) => {
		toast.error(codeMatcherError(error?.code), {
			toastId: 'axios',
		})
		return new Promise((resolve, reject) => reject(error))
	}
)
