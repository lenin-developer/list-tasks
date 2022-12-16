import { DominioQuery } from '@/configs/axios'
import { dominioWeb } from '@/constants/endpoints'
import { taksAdapter } from './task.adapter.js'

export const getTask = async (id) => {
	const root = dominioWeb.Path.task
	const pathId = `${root}/${id}`
	const path = id ? root : pathId

	const { data } = await DominioQuery.get(path)
	return taksAdapter(data)
}

export const postTask = async (task) => {
	const { data } = await DominioQuery.post(dominioWeb.Path.task, task)
	return taksAdapter(data)
}
