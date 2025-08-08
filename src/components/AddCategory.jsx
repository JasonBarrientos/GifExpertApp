import { useState } from 'react'

export const AddCategory = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChanged = ({ target }) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault(); //evita q se recargue todo
         
        if (inputValue.trim().length<=1) {
            return;
        }
        setCategory(categories=>[...categories,inputValue])
        setInputValue('')

    }
    return (
        <form onSubmit={ onSubmit} >
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

