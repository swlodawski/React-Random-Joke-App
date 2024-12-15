import { useState } from 'react'
import '../src/App.css';
import Joke from'./components/Joke/Joke';
function App() {
  

  return (
    <div className='App'>
      <h1>Random Joke Generator</h1>
      <Joke/>
    </div>
  )
}

export default App
