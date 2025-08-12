import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas AddCategory', () => {

    test('Debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, {
            target: {
                value: 'valor mio'
            }
        })
        expect(input.value).toBe('valor mio')
    })
    test('Debe de llamar al onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        //OTOD:??
        const onNewCategory = jest.fn(); //simulaicon de una funcion
        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)

        // screen.debug();
    })
    test('No debe de llamar al onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />)
        screen.debug()
        const form = screen.getByRole('form')
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0)
        expect(onNewCategory).not.toHaveBeenCalled()

    })

})