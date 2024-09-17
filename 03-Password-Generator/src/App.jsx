import { useState  , useCallback} from 'react'

import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [number , setnumber] = useState(false)
  const [Char , setChar] = useState(false)
  const [password ,setpassword]=useState("")

  const passwordGenerator =useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvqxyz"

    if(number){
      str +="0123456789"
    }
    if(Char){
      str +="!@#$%^&*_-+=[]{}`"
    }

    for(let i =1 ;i<=array.length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass = str.charAt(char)
    }
   setpassword(pass)

  },[length,number,Char,setpassword])


  return (
    <>
     <h1 className='text-3xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
