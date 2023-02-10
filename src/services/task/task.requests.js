import { DominioQuery } from '@/configs/axios'
import { dominioWeb } from '@/constants/endpoints'
import { toast } from 'react-toastify'
import { taksAdapter } from './task.adapter.js'

export const getTask = async (controller, id) => {
	const root = dominioWeb.Path.task
	const pathId = `${root}/${id}`
	const path = id ? pathId : root

	const { data } = await DominioQuery.get(path, {
		signal: controller.signal,
	})

	return taksAdapter(data)
}

export const postTask = async (task, config) => {
	const { data } = await toast.promise(DominioQuery.post(dominioWeb.Path.task, task), {
		...config,
	})

	return taksAdapter([data])
}

export const patchTask = async (id, body, config) => {
	const { data } = await toast.promise(DominioQuery.patch(`${dominioWeb.Path.task}/${id}`, body), {
		...config,
	})
	return taksAdapter([data])
}

export const deleteTaskRequest = async (id, config) => {
	const { data } = await toast.promise(DominioQuery.delete(`${dominioWeb.Path.task}/${id}`), {
		...config,
	})
	return data
}
