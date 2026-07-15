import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

function myApp() {
  return (
    <div>Hii this is from Main.jsx!</div>
  )
}

// what if i put my custom here it will give error because we have created syntax
// suppose we change key value pair, it is not syntatically correct as react has their own expectation so thats why it is not working 
// object cannot direcly parse to tree ,bcz we are defining our own synatx 

const ReactElement = {
    type:'a',
    props: {
        href:'https://google.com',
        target: 'blank'
    },
    children:'Click me to visit google'
}
const anothername = "Baisla"
const anotherElement = (
  
  <a href="https.//google.com" target='_blank'>Visit Google</a>
)

const ReeactElement = React.createElement(
  'a',
  {href:'https://google.com',
        target: 'blank'},
      'Click me to visit google',
  anothername  
)
createRoot(document.getElementById('root')).render(

    // <App/>
    // myApp()
    // anotherElement
  ReeactElement

  
)
