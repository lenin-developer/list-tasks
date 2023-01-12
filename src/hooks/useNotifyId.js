import { toasTifyConfigError, toasTifyConfigSuccess } from '@/configs/ui'
import { toast } from 'react-toastify'

export const useOnSuccess = (success) => {
	const { active, id, msg } = success
	active ? toast.update(id, { ...toasTifyConfigSuccess, render: msg }) : toast.dismiss(id)
}

export const useOnError = (error) => {
	const { active, id, msg } = error
	active ? toast.update(id, { ...toasTifyConfigError, render: msg }) : toast.dismiss(id)
}
