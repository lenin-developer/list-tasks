import { Button, InputText, Modal, TextArea } from '@/components'
import { bool, func, shape, string, number } from 'prop-types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AddTaskSchema } from '@/schemas'

import styles from './modalTaskEdit.module.scss'
import { usePatchTask } from '@/services/task'

const ModalTaskEdit = ({ title, setShow, task }) => {
	const { mutate: updateTask, isLoading } = usePatchTask()
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm({
		defaultValues: {
			...task,
		},
		resolver: yupResolver(AddTaskSchema),
		mode: 'onChange', // para que se haga la validacion al hacer onchange
	})

	const updateTaskEvent = (dataForm) => {
		const data = {
			id: task?.id,
			body: {
				title: dataForm.title,
				description: dataForm.description,
			},
		}

		updateTask(data, {
			onSuccess: async () => {
				await setShow()
			},
		})
	}

	return (
		<Modal setShow={setShow} title={title}>
			<form className={styles.form} onSubmit={handleSubmit(updateTaskEvent)}>
				<div className={styles.form__title}>
					<InputText label={'title'} {...register('title')} error={errors?.title} />
				</div>
				<div>
					<TextArea label='description' {...register('description')} error={errors.description} />
				</div>
				<div className={styles.form__btns}>
					<Button label={'Guardar'} color={'primary'} type='submit' disabled={!isValid || isLoading} />
					<Button label={'Cancelar'} color='danger' onClick={setShow} disabled={isLoading} />
				</div>
			</form>
		</Modal>
	)
}

ModalTaskEdit.propTypes = {
	title: string,
	setShow: func.isRequired,
	task: shape({
		id: number,
		description: string,
		title: string,
		checked: bool,
	}),
}

export default ModalTaskEdit
