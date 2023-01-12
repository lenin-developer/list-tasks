import { getInLocalStorage, saveInLocalStorage } from '@/utils/localStorage'
import axios from 'axios'

saveInLocalStorage('token', '1234567890')

export const query = axios.create({
	baseURL: 'http://localhost:3004',
	responseType: 'json',
})

const updateHeader = (request) => {
	const token = getInLocalStorage('token')
	const newHeaders = {
		Authorization: token,
		'Content-Type': 'application/json',
	}
	request.headers = newHeaders
	return request
}

query.interceptors.request.use((request) => {
	if (request.url?.includes('assets')) return request
	return updateHeader(request)
})
