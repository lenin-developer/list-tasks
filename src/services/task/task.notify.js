export const settignMsgGET = (newSettign) => ({
	loadign: {
		active: true,
		msg: 'obteniendo lista de tasks mas recientes ...',
	},
	success: {
		active: false,
		msg: 'tasks',
	},
	error: {
		active: true,
		msg: 'No fue posible obtener las tasks',
	},

	...newSettign,
})

export const postMsg = {
	pending: 'guardando Task...',
	success: 'guardado con exito',
	error: 'No fue posible guardar la Task',
}

export const patchtMsg = {
	pending: 'Editando task...',
	success: 'Editado con exito',
	error: 'No fue posible editar la Task',
}

export const deletetMsg = {
	pending: 'Eliminando Task...',
	success: 'Eliminado con exito',
	error: 'No fue posible Eliminar la Task',
}
