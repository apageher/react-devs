import { Button } from "@mui/material"
import { useQuestionsStore } from "./store/questions"

export const Start = () => {

    const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)

    const handleClick = () => {
        fetchQuestions(10)
    }

    return (
        <div style={{ marginTop: '16px' }}>
            <Button onClick={handleClick} variant='contained'>
                ¡Empezar el juego!
            </Button>
        </div>
    )
}