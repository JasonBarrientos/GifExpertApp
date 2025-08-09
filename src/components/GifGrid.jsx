import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";
import {GifItem} from './GifItem'

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages= async (category)=>{
        const newImages=  await  getGif(category)
        setImages(newImages)
    }

   useEffect(() => {
    getImages(category)
   }, [])
   
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(image=>{
                      return  <GifItem key={image.id} {...image} ></GifItem>
                    })
                }
            </div>
        </>
    )
}

// GifGrid.prototype({
//     category: require()
// })