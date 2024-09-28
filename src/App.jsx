import React, { useState } from 'react'
import Modal from './Modal';


function App() {
  const [display, setDisplay] = useState(false);
  const [text, setText] = useState("Show Modal");
  return (
    <div className='flex justify-center items-center  min-h-screen'>
      <button className='bg-blue-500 text-white pt-1 pb-1 pl-2 pr-2 rounded-sm'
        onClick={() => setDisplay(true)}
      >{text}</button>

      {display && <Modal

        setDisplay={setDisplay} setText={setText} />}
    </div>
  )
}

export default App