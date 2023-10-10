import { useEffect, useState } from "react"
import { getRandomFact } from "../services/randomFacts"

export const useFact = () => {

    const [fact, setFact] = useState()
    // const [factError, setFactError] = useState() //Si fuera necesario

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    // const refreshFactAwait = async () => {
    //     const newFact = await getRandomFact()
    //     setFact(newFact)
    // }

    useEffect(refreshFact, [])
    // useEffect(() => { refreshFactAwait().catch() }, [])

    return { fact, refreshFact }
}