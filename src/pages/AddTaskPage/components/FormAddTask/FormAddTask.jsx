import { Button, InputText, TextArea } from '@/components'
import { AddTaskInitValue, AddTaskSchema } from '@/schemas'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import styles from './formAddTask.module.scss'
import { usePostTask } from '@/services/task'

export const FormAddTask = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		defaultValues: AddTaskInitValue,
		resolver: yupResolver(AddTaskSchema),
		mode: 'onChange', // para que se haga la validacion al hacer onchange
	})

	const { mutate, isLoading } = usePostTask()

	const addTaskEvent = (data) => {
		const body = { ...data, checked: false }
		mutate(body, {
			onSuccess: () => {
				reset()
			},
		})
	}

	return (
		<form onSubmit={handleSubmit(addTaskEvent)} className={styles.form}>
			<InputText label='Title' id='titleTask' {...register('title')} error={errors.title} />
			<TextArea
				placeholder='descripcion de la tarea'
				aria-label='descripcion de la tarea'
				{...register('description')}
				error={errors.description}
			/>
			<Button label='Agregar' type='submit' size='lg' disabled={!isValid || isLoading} />
		</form>
	)
}
