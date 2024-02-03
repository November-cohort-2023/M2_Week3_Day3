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
        <ID name="Christian" country="Germany"></ID>
      </Container>
      <Container>
        <ID name="Diogo" country="Portugal"></ID>
      </Container>
    </>
  )

  /* 
  exercise 2:

  1. add the following to your ID component:

    <h2> Name: Christian </h2>
    <p> City: Germany </p>
  
  
  2. your Container componenent should look like this

      <div style={{border:'solid black'}}>
        {props.children}

    </div>


  3. render the ID component within the Container component as props.children
  */
}

export default App
