import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
    const [categories, setCategories] = useState([])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/* TITLE */}
            <h1>GifExpertApp</h1>
            {/* input */}
            {/* listado de gif */}
            <AddCategory
                onNewCategory={onAddCategory}
            />

            <ol>
                {categories.map((category, idx) => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/* gif item */}

        </>
    )
}

export default GifExpertApp 