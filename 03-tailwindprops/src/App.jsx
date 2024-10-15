import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import viteLogo from '/assets/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    username: 'MAK',
    age:'23'
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username={obj.username}/>
    </>
  )
}

export default App
