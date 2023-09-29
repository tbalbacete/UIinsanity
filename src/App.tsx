import './App.css'
import { Box, Button, TextInput } from '@mantine/core'

export const App: React.FC = () => {

  return (
    <Box bg="#FFFFFF" c="#000" style={{ padding: "2rem 5rem", border: "1px solid grey", borderRadius: "8px" }}>
      <TextInput bg="#FFFFFF" label="Username" placeholder="yourusername@website.com" />
      <TextInput bg="#FFFFFF" label="Password" placeholder="" />
      <Box>
        <Button size="s">Submit</Button>
      </Box>

    </Box>
  )
}

export default App
