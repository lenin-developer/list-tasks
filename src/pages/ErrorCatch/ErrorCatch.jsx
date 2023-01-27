const ErrorCatch = () => {
	return (
		<div>
			<h2>Error Inesperado</h2>
			<p>se aproducido un fallo en el sistema</p>
			<br />
			<p>el equipo de IT ha sido nofificado del problema con el Tikect: {Math.random()} </p>
			<p>tan pronto el equipo tecnico resulva el probelma le notificaremos</p>
			<p>porfavor proporcionenos un correo para poder notificarle cuando el fallo halla sido resuelto</p>
			<input type='text' />
			<button>Enviar</button>
			<button
				onClick={() => {
					// no se puede con react router
					window.location.href = '/app'
				}}
			>
				ir al inicio
			</button>
		</div>
	)
}

export default ErrorCatch
