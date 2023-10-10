import { CAT_ENDPOINT_RANDOM_FACT } from "../constants"

export const getRandomFact = () => {

    return fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(response => response.json())
        .then(data => {
            const { fact } = data
            return fact
        })
}

//Con async-await
// export const getRandomFact = async () => {
//     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
//     const data = await res.json()
//     const { fact } = data
//     return fact
// }