import { DominioQuery } from '@/configs/axios'
import { dominioWeb } from '@/constants/endpoints'
import { toast } from 'react-toastify'
import { taksAdapter } from './task.adapter.js'

export const getTask = async (id) => {
	const root = dominioWeb.Path.task
	const pathId = `${root}/${id}`
	const path = id ? root : pathId

	const { data } = await DominioQuery.get(path)
	return taksAdapter(data)
}

export const postTask = async (task) => {
	const { data } = await toast.promise(DominioQuery.post(dominioWeb.Path.task, task), {
		pending: 'guardando',
		success: 'guardado 👌',
		error: 'Erro al guardar 🤯',
	})

	return taksAdapter([data])
}
