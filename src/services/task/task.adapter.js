export const taksAdapter = (dataApi) => {
	return dataApi?.map((data) => ({
		title: data?.title,
		description: data?.description,
		checked: data?.checked,
		id: data?.id,
	}))
}
