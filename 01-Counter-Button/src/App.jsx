import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter,setCounter]=useState(7)

 
  const addValue = () => {
    Counter=Counter+1;
    setCounter(Counter)
    
  }
  const removeValue = () => {
    if (Counter>0){
      Counter=Counter-1;
    setCounter(Counter)
    }
  }
  return (
    <>
      <h2>Hello from Aditi✨</h2>
      <h3>Counter value: {Counter}</h3>

      <button onClick={addValue}
      >Add value</button>
      
      <button onClick={removeValue}
      >Remove  value</button>
    </>
  )
}
  

export default App
