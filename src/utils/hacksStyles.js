/**
 * This function takes in a ref and a className and toggles the className on the ref.
 * @param {node} ref - the ref of the element you want to toggle the class on
 * @param {string} className - the class you want to toggle
 */
export const toggleCss = (ref, className) => {
	ref.current.classList.toggle(`${className}`)
}
