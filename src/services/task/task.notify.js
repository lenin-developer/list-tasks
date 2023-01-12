export const settignMsgGET = (newSettign) => ({
	loadign: {
		active: true,
		msg: '... procesando',
	},
	success: {
		active: false,
		msg: 'exitoso',
	},
	error: {
		active: true,
		msg: ' no se pudo extraer las task',
	},

	...newSettign,
})

export const postMsg = {
	pending: 'guardando Task...',
	success: 'guardado con exito',
	error: 'No fue posible guardar la Task',
}
