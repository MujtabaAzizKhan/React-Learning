import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const addValue = () => {
    if(count > 20){
      setCount(20)
    }
    else{
      setCount(count + 1)
      console.log("clicked " + count)
    }

  }
  const decreaseValue = () => {
    if(count <= 0){
      setCount(0)
    }
    else{
      setCount(count - 1)
      console.log("clicked " + count)
      
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
