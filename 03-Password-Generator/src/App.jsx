import { useState  , useCallback , useEffect ,useRef} from 'react'



function App() {
  const [length , setLength] = useState(8)
  const [number , setnumber] = useState(false)
  const [Char , setChar] = useState(false)
  const [password ,setpassword]=useState("")

//USE REF HOOK FOR COPY
const passwordRef = useRef(null)

const copytoclipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,100)
  window.navigator.clipboard.writeText(password)}
, [password])


 // Password Generator

  const passwordGenerator =useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvqxyz"

    if(number){
      str +="0123456789"
    }
    if(Char){
      str +="!@#$%^&*_-+=[]{}`"
    }

    for(let i =1 ;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
   setpassword(pass)
},[length,number,Char,setpassword])
useEffect(()=>{passwordGenerator()},[length,number,Char,passwordGenerator])
  
//STRUCTURE
return (

  // MAIN CONTAINER
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-yellow-600 bg-green-900'>

    <div className='text-yellow-500 text-center font-extrabold text-2xl font-mono my-5'>Password Generator</div>
    
    {/* PASSWORD SHOWN HERE */}
    <div className="flex shadow rounded-lg overflow-hidden mb-4 ">

     < input 
     type='text'
     value={password}
     className='outline-none w-full py-2  px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 '
     placeholder='GENERATED PASSWORD'
     readOnly
     ref={passwordRef}
     
     />

     <button
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-md'
      
      onClick={() => {
        copytoclipboard()
        
      }}>
      COPY
     </button>
    </div>

          
           <div className=" text-center flex flex-col justify-center items-center  font-mono text-sm gap-x-2">

            {/* LENGTH */}
            <div className="flex items-center gap-x-1 my-4">
              <input
               type="range"
               min={4}
               max={100}
               value={length}
               className='cursor-pointer'
               onChange={(e)=>{setLength(e.target.value)}}
               />
               <label>Length: {length}</label>
            </div>

            {/* NUMBER */}
             <div className='flex items-center gap-x-1 my-4'>
             <input 
             type="checkbox"
             defaultChecked={number}
             id="numberInput"
             onChange={(e)=>{
              setnumber((prev)=>!prev);
             }}
            />
            <label htmlFor='numberInput'>Numbers</label>
             </div>

            {/* CHARACTERS */}
             <div className='flex items-center gap-x-1 my-4'>
             <input 
             type="checkbox"
             defaultChecked={Char}
             id="characterInput"
             onChange={(e)=>{
              setChar((prev)=>!prev);
             }}
            />
            <label htmlFor='characterInput'>Characters</label>
             </div>

           </div>
    </div>
    </>
  )
}

export default App
