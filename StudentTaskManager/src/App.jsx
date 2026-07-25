import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [tasks, settasks] = useState(["React","HTML","CSS"])
  const [taskInput, settaskInput] = useState("")

  const handleInputChange = ((e)=>{
    settaskInput(e.target.value)
  })

  const handleAddTask = () => {
    settasks([...tasks,taskInput]);
    setTaskInput("")
  }
  return (
   <>
    <h1>My Task List</h1>
    <ul>
      {
        tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))
      }
    </ul>

        <div style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Enter a new task..." 
        value={taskInput} 
        onChange={handleInputChange} 
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
   </>
  )
}

export default App
