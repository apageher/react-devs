import { useEffect, useState } from "react"
import { CAT_ENDPOINT_IMAGE_URL, CAT_PREFIX } from "../constants";

export const useImageCat = ({ fact }) => {

    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        if (fact) {
            const firstWord = fact.split(" ")[0];
            fetch(CAT_ENDPOINT_IMAGE_URL.replace("#firstWord", firstWord))
                .then(response => response.json())
                .then(data => setImageUrl(`${CAT_PREFIX}${data.url}`))
        }
    }, [fact])

    return { imageUrl }
}