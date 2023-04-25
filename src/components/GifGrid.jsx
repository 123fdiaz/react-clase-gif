import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./index";
import { useFechGifs } from "../hooks/useFechGifs";


export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFechGifs(category);
    return (
        <>
        <h3>{category}</h3>
        {
                isLoading && ( <h2>Cargando...</h2> )
        }
        <div className="card-grid">

            {
                images.map((img) => (
                    <GifItem
                    id={img.id}
                    {...img}
                    />
                ))
            }
        </div>

        </>
    )
}
