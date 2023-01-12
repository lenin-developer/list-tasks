import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const useOnLine = () => {
	const [isOnline, setIsOnline] = useState(navigator.onLine)

	useEffect(() => {
		const handleStatusChange = () => {
			setIsOnline(navigator.onLine)
			if (!navigator.onLine) {
				toast.loading('Reconectando (sin internet)', { toastId: 'conexion' })
			} else {
				toast.dismiss('conexion')
			}
		}

		window.addEventListener('online', handleStatusChange)
		window.addEventListener('offline', handleStatusChange)

		return () => {
			window.removeEventListener('online', handleStatusChange)
			window.removeEventListener('offline', handleStatusChange)
		}
	}, [isOnline])
}
