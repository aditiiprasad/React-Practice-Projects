import { useState } from "react";


function App() {
  const [color,setColor] = useState("Black")

  return (
    
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

         <div className="flex flex-wrap justify-center gap-3 sgadow-lg bg-white px-2 py-3 rounded-2xl ">

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} 
          onClick={()=> setColor("Red")}
          >
            Red
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}} 
           onClick={()=> setColor("Green")}
          >
            Green
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Grey"}} 
           onClick={()=> setColor("Grey")}
          >
            Grey
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:" Blue"}} 
           onClick={()=> setColor("Blue")}
          >
            Blue
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Pink"}} 
           onClick={()=> setColor("Pink")}
          >
            Pink
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Yellow"}} 
           onClick={()=> setColor("Yellow")}
          >
           Yellow
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Black"}} 
           onClick={()=> setColor("Black")}
          >
           Black
          </button>



         </div>

       </div>

    </div>
  )
}

export default App
