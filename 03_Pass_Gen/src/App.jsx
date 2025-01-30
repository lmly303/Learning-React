import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword ] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num) str+="1234567890";
    if(char) str+="!@#$%^&*().?"

    for(let i=1;i<=length;i++){
      let position=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(position)
    }
    setPassword(pass);

  }, [length,num,char,setPassword]);

  const copyPasswrodOnClick = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator();
  }, [length,num,char,passwordGenerator])

  return (

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 mt-10 text-orange-500 bg-gray-500 justify-center'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password} 
            className='outline-none w-full py-1 px-3  bg-white'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswrodOnClick}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={num} 
              id='numberInput'
              onChange={()=>{
                setNum((prev)=>!prev);
              }}
            />
          <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={char} 
              id='charInput'
              onChange={()=>{
                setChar((prev)=>!prev);
              }}
            />
              <label htmlFor="characterInput">Characters</label>
          </div>
          </div>
      </div>
  
  )
}

export default App
