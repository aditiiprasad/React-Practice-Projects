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
    <div className='w-full max-w-md mx-auto shadow-md rounder-lg px-4 my-8 text-orange-500 bg-gray-700'>

    <div className="flex shadow rounded-lg overflow-hidden mb-4 ">

     < input 
     type='text'
     value={password}
     className='outline-none w-full py-1 px-3 '
     
     
     />
     


    </div>

    </div>
    </>
  )
}

export default App
