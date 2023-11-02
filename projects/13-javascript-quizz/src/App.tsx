import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Stack, Typography } from '@mui/material'
import { JavaScriptLogo } from './JavaScriptLogo'
import { Start } from './Start'
import { useQuestionsStore } from './store/questions'
import { Game } from './Game'

function App() {

  const questions = useQuestionsStore(state => state.questions)

  return (
    <main>
      <Container maxWidth='sm'>

        <Stack direction={'row'} gap={2} alignItems={'center'} justifyContent={'center'}>
          <JavaScriptLogo></JavaScriptLogo>
          <Typography variant='h2' component='h1'>
            Javacript quizz
          </Typography>

        </Stack>
        {questions.length === 0 && <Start></Start>}
        {questions.length > 0 && <Game></Game>}

      </Container>

    </main>
  )
}

export default App
