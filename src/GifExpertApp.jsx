import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch','Pokemon'])
    const onAddCategory=(value)=>{
        console.log(value);
        setCategories([...categories,'nuevoElemento'])
    }

    return (
        <>
            {/* TITLE */}
            <h1>GifExpertApp</h1>
            {/* input */}
            {/* listado de gif */}
            <AddCategory/>
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map((category,idx)=>{
                    return <li key={idx}>{category}</li>
                })}
            </ol>
            {/* gif item */}

        </>
    )
}

export default GifExpertApp 