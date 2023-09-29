import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Title } from '@mantine/core'

export const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Title>
        Hello World
      </Title>
    </Box>
  )
}

export default App
