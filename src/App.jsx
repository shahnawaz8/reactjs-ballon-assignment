import { useState } from 'react'
import './App.css'
import { Ballons } from './Components/Ballon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Ballons/>
    </div>
  )
}

export default App
