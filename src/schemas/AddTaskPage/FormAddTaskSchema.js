import * as yup from 'yup'
export const AddTaskSchema = yup.object({
	title: yup.string().required('Campo requerido'),
	description: yup.string().required('Campo requerido'),
})
export const AddTaskInitValue = {
	description: null,
}
