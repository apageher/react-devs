import { useEffect, useState } from "react"
import './App.css'
import { useFact, useImageCat } from "./hooks"

export const App = () => {

    const { fact, refreshFact } = useFact()
    const { imageUrl } = useImageCat({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>Mi app</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extract with the first world from ${fact}`}></img>}
        </main>
    )
}