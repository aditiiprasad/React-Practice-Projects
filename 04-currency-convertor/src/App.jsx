import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

import './App.css'

function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount, setconvertedAmount]=useState(0)

  const currencyInfo =useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }

  


  return (
    
   <h1>hi</h1>

  )
}

export default App


