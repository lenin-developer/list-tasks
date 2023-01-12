export const toasTifyConfig = {
	position: 'bottom-right',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
}

export const toasTifyConfigSuccess = {
	...toasTifyConfig,
	type: 'success',
	isLoading: false,
}

export const toasTifyConfigError = {
	...toasTifyConfig,
	type: 'error',
	isLoading: false,
}
