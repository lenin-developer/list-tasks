import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getTask, postTask } from './task.query.js'

const key = 'task'

export const useGetTasks = () => {
	return useQuery({
		queryKey: [key],
		queryFn: getTask,
	})
}

export const useGetTaskId = (id) => {
	return useQuery({
		queryKey: [key, { id }],
		queryFn: getTask,
	})
}

export const usePostTask = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: postTask,
		onSuccess: (task) => {
			queryClient.setQueryData([key], (prevTasks) => prevTasks?.concat(task))
		},
	})
}
