import { toasTifyConfig } from '@/configs/ui/toasTify.config.js'
import { localStorage } from '@/constants/localStorageKeys'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import { deletetMsg, patchtMsg, postMsg, settignMsgGET } from './task.notify.js'
import { deleteTaskRequest, getTask, patchTask, postTask } from './task.requests.js'

const key = localStorage.key.task
const id = uuidv4()

export const useGetTasks = (autoCall = true, settingMsg = {}, settignQuery = {}) => {
	const toastId = id
	const toastIdError = `${toastId}-error`
	const controller = new AbortController()
	const { loadign, error } = settignMsgGET(settingMsg)

	const queryprops = useQuery({
		queryKey: [key],
		queryFn: () => {
			loadign?.active && toast.loading(loadign?.msg, { ...toasTifyConfig, toastId })
			return getTask(controller)
		},
		enabled: autoCall,

		onSuccess: (data) => {
			loadign?.active && toast.dismiss(toastId)
			// success?.active && toast.success(success.msg, { toastId: toastIdSuccess })
		},
		onError: () => {
			loadign?.active && toast.dismiss(toastId)
			error?.active && toast.error(error.msg, { toastId: toastIdError })
		},
		...settignQuery,
	})

	const abort = () => {
		controller.abort()
	}

	useEffect(() => {
		return () => {
			toast.dismiss(toastId)
			// toast.dismiss(toastIdSuccess)
			toast.dismiss(toastIdError)
		}
	}, [])

	return { ...queryprops, abort, key }
}

export const useGetTaskId = (id) => {
	return useQuery({
		queryKey: [key, id],
		queryFn: getTask,
	})
}

export const usePostTask = (settingMsg = postMsg, settingMutation = {}) => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: (body) => {
			postTask(body, settingMsg)
		},
		onSuccess: () => {
			queryClient.invalidateQueries([key])
		},
		...settingMutation,
	})

	return { ...mutation, key }
}

export const usePatchTask = (settingMsg = patchtMsg) => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: async (data) => {
			const { id, body } = data
			return await patchTask(id, body, settingMsg)
		},
		onSuccess: () => {
			queryClient.invalidateQueries([key])
		},
	})

	return { ...mutation }
}

export const useDeleteTask = (settingMsg = deletetMsg) => {
	const queryClient = useQueryClient()

	const mutate = useMutation({
		mutationFn: async (id) => {
			return await deleteTaskRequest(id, settingMsg)
		},
		onSuccess: () => {
			queryClient.invalidateQueries([key])
		},
	})
	return { ...mutate }
}
