import { useState } from 'react'
import './App.css'

function App() {
  // to acces the env variable 
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
    <h1>A blog App with Appwrite</h1>
    </>
  )
}

export default App
