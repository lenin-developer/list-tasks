/**
 * This function takes in a ref and a className and toggles the className on the ref.
 * @param {node} refElement - the ref of the element you want to toggle the class on
 * @param {string} className - the class you want to toggle
 */
export const toggleCss = (refElement, className) => {
	try {
		refElement.current.classList.toggle(`${className}`)
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('erro in the function toggleCss', error)
	}
}

export const transitonAndEvent = (refElement, className, collback, delaySm, classNameErro) => {
	try {
		refElement.current.classList.toggle(`${className}`)

		setTimeout(() => {
			collback()
		}, delaySm)
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('erro in the function toggleCss', error)
	}
}

/**
 * It toggles the value of a property of a ref object between two values
 * @param {object} ref - the ref object html (useRef)
 * @param {string} attr - the attribute you want to toggle
 * @param {any} valueUno - The first value to toggle between.
 * @param {any} ValueTwo - The value you want to toggle to.
 */
export const toggleAtrrValue = (ref, attr, valueUno, ValueTwo) => {
	try {
		if (ref.current[attr] === valueUno) {
			ref.current[attr] = ValueTwo
		} else {
			ref.current[attr] = valueUno
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('erro in the function togglePropertyValue', error)
	}
}
