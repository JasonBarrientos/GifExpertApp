import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
    const [categories, setCategories] = useState([])


    return (
        <>
            {/* TITLE */}
            <h1>GifExpertApp</h1>
            {/* input */}
            {/* listado de gif */}
            <AddCategory setCategory={setCategories}/>
            
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