import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Chai from "./chai"

// A variable is always inside curly bracecs {username}

function App() {
  const username = "Aakash Baisla"
return (
  <>
  <Chai/>
  <h1>Chai par Man ki Baat {username}</h1> 
  <p>test para </p>
  </>
)
}

export default App
