import { useState } from 'react'
import PropTypes from "prop-types";
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChanged = ({ target }) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault(); //evita q se recargue todo
        const newInpuValue = inputValue.trim()
        if (newInpuValue.length <= 1) return;
        onNewCategory(newInpuValue)
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit} aria-label='form' >
            <input
                type="text"
                placeholder='Buscar gif'
                value={inputValue}
                onChange={(e => {
                    onInputChanged(e);
                })} />
        </form>

    )
}

AddCategory.propTypes={
    onNewCategory: PropTypes.func.isRequired
}