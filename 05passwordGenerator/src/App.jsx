import { useState,useCallback } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, numberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState("")
  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
