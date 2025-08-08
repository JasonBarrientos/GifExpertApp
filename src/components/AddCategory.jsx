import { useState } from 'react'

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('')
    const onInputChangd = ({ target }) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault(); //evita q se recargue todo         
    }
    return (
        <form onSubmit={(event) => onSubmit(event)} >
             <input 
             type="text" 
             placeholder='Buscar gif' 
             value={inputValue} 
             onChange={(e => {
                    onInputChangd(e);
            })} />
        </form>

    )
}

