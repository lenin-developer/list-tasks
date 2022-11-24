import { toggleAtrrValue, toggleCss } from '@/utils/toggleAtrrHtml'

const ElementMock = {
	current: {
		classList: {
			toggle: jest.fn(),
		},
		attributeMock: 'true',
	},
}

const claseCssMock = 'myClase'
const nameAtrrMock = 'attributeMock'
const valueAtrrOne = 'true'
const valueAtrrTwo = 'false'

describe('toggleAtrrHtml: module utils', () => {
	it('toggleCss deberia invocar a la funcion toggle con el segundo paremetro ', () => {
		toggleCss(ElementMock, claseCssMock)
		expect(ElementMock.current.classList.toggle).toBeCalledWith(claseCssMock)
	})

	it('toggleAtrrValue deberia modificar el valor del atributo  a false', () => {
		toggleAtrrValue(ElementMock, nameAtrrMock, valueAtrrOne, valueAtrrTwo)
		expect(ElementMock.current[nameAtrrMock]).toBe(valueAtrrTwo)
	})

	it('toggleAtrrValue deberia modificar el valor del atributo a true ', () => {
		ElementMock.current.attributeMock = 'false'
		toggleAtrrValue(ElementMock, nameAtrrMock, valueAtrrOne, valueAtrrTwo)
		expect(ElementMock.current[nameAtrrMock]).toBe(valueAtrrOne)
	})
})
