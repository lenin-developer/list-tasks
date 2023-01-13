import styled from './snniper.module.scss'

const Snniper = () => {
	return (
		<div className={styled.loader}>
			<div className={styled.outer}></div>
			<div className={styled.middle}></div>
			<div className={styled.inner}></div>
		</div>
	)
}

export default Snniper
