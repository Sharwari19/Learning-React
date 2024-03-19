import { useState } from 'react'
import { useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed)  str += "!@#$%^&*-_+=[]{}~`"
    
    for(let i = 1; i <= length; i++){

      let char = Math.floor(Math.random() * str.length + 1)

      password = password + str.charAt(char)
    }

    setPassword(password)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 12);

    //here we're using React core that's why the entire code will be compiled to JS by browser's JS execution engine. Therefore we have access to the window object
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  text-orange-500 bg-gray-800'>
        <h1 className=' text-center my-4 text-2xl text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-6' > 
          <input type="text" value={password} 
          className='outline-none w-full py-2 px-3 '
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5  shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-4'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length ({length})</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((numberAllowed) => !numberAllowed);
            }}/>
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((charAllowed) => !charAllowed);
            }}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
