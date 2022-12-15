import { query } from '@/configs/axios'

export const getTask = async (id) => {
	const root = `/task`
	const pathId = `${root}/${id}`
	const path = id ? root : pathId

	const res = await query.get(path)
	return res.data
}

export const postTask = async (task) => {
	const res = await query.post('/task', task)
	return res.data
}
