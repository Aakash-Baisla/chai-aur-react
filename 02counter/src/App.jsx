import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
//  let counter = 5


//  const addvalue = ()=>{
//   // console.log("clicked",Math.random())
//   console.log("clicked",counter)
//   counter += 1;
//  } 

// now see realk use of hook 

let [counter, setCounter] = useState(1);

const decValue =()=>{
  console.log("clicked",counter)
  // counter = counter -1;
  // setCounter(counter -= 1);
  if(counter > 0){
    setCounter(counter -= 1);
  }
  else{
    alert("Try Again Later :)")
  }
}
const addValue = ()=>{
  console.log("clicked",counter)
  // counter = counter +1
  setCounter(counter += 1);
}

  return (
    <>
    <h1>Chai With React</h1>
    <h2>Counter Value:{counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={decValue}>Remove Value </button>
    </>
  )
}

export default App
