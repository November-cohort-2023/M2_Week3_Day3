import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/container'
import ID from './components/ID'
import Movie from './components/Movie'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Container>
        <Movie></Movie>
     </Container>
    </>
  )
}

export default App
