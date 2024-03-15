import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>

      <div className='w-full h-screen'
      style={{backgroundColor : color}}>

            <h1
            className='text-center text-2xl py-4 rounded-2xl text-white'
            style={{backgroundColor : color}}>
            Background Changer Project
            </h1>


        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

            
          
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>

            
            <button 
            onClick={() => setColor("green")}
            className='outline-none px-5 py-1 rounded-full  text-white shadow-lg'
            style={{backgroundColor: "green"}}>Green</button>

            
            <button 
             onClick={() => setColor("yellow")}
            className='outline-none px-5 py-1 rounded-full  text-black shadow-lg'
            style={{backgroundColor: "yellow"}}>Yellow</button>

            
            <button 
            onClick={() => setColor("orange")}
            className='outline-none px-5 py-1 rounded-full  text-white shadow-lg'
            style={{backgroundColor: "orange"}}>Orange</button>

            <button 
            onClick={() => setColor("red")}
            className='outline-none px-5 py-1 rounded-full  text-white shadow-lg'
            style={{backgroundColor: "red"}}>Red</button>
            
            <button
             onClick={() => setColor("skyblue")} 
            className='outline-none px-5 py-1 rounded-full  text-white shadow-lg'
            style={{backgroundColor: "skyblue"}}>Sky Blue</button>

            <button
            onClick={() => setColor("blue")} 
            className='outline-none px-5 py-1 rounded-full  text-white shadow-lg'
            style={{backgroundColor: "blue"}}>Blue</button>

            <button
            onClick={() => setColor("purple")} 
            className='outline-none px-5 py-1 rounded-full  text-white shadow-lg'
            style={{backgroundColor: "purple"}}>Purple</button>

          </div>
        
        </div>
      </div>

    </>
  )
}

export default App