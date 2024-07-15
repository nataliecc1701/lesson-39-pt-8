import { useState } from 'react'
import './App.css'
import BoxList from './BoxList.jsx';
import TodoList from './TodoList.jsx';

function App() {
  const [toDoMode, setMode] = useState(false)

  const changeMode = (evt) => {
    setMode(!toDoMode)
  }
  
  const buttonText = () => {
    if (toDoMode) return "Change to color box"
    else return "Change to to-do list"
  }
  
  return (<>
    <button onClick={changeMode} className="App-ModeButton">
      {buttonText()}
    </button>
    {(!toDoMode && <BoxList />)}
    {(toDoMode && <TodoList />)}
    </>)
}

export default App
