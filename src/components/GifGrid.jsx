import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages= async (category)=>{
        const newImages=  await  getGif(category)
        setImages(newImages)
    }

   useEffect(() => {
    getImages()
   }, [])


   
   
    return (
        <>
            <h3>{category}</h3>
            <ol>
                {
                    images.map(img=>{
                        return (
                        <li key={img.id}>{img.title}</li>
                    )
                    })
                }
            </ol>
        </>
    )
}

// GifGrid.prototype({
//     category: require()
// })