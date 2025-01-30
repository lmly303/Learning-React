import { useState } from "react"
function App() {
  const [color,setColor] = useState("olive");

  return (

      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  ">
          <div className="flex flex-wrap gap-3 shadow-lg bg-white px-2 py-3 rounded-2xl">
            <button className="text-white px-4 py-1 rounded-full shadow-lg bg-green-500" onClick={()=> setColor("green")}>
              Green
            </button>
            <button className="text-white px-4 py-1 rounded-full shadow-lg bg-red-500" onClick={()=> setColor("red")}>
              Red
            </button>
            <button className="text-white px-4 py-1 rounded-full shadow-lg bg-blue-500" onClick={()=> setColor("blue")}>
              Blue
            </button>
            <button className="text-white px-4 py-1 rounded-full shadow-lg bg-violet-500" onClick={()=> setColor("violet")}>
              Violet
            </button>
            <button className="text-white px-4 py-1 rounded-full shadow-lg bg-yellow-500" onClick={()=> setColor("yellow")}>
              Yellow
            </button>
            <button className="text-white px-4 py-1 rounded-full shadow-lg bg-orange-500" onClick={()=> setColor("orange")}>
              Orange
            </button>
          </div>
        </div>
      </div>

  )
}

export default App
