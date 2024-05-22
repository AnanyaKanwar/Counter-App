import React, { useState } from 'react'
// import { useState } from 'react';

const App = () => {
  const[count,setCount]=useState(0);
      
  function decrementHandler(){
    setCount(count-1);
    // count=count-1;
  }
  function incrementHandler(){
    setCount(count+1);
  }
  function reset(){
    setCount(0);
  }
  return (


    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
      <div className=' text-sky-600 font-medium text-2xl'>Increment & Decrement</div>
      <div className=' bg-white flex justify-center gap-12 py-13 rounded-sm text-[25px] '>
        <button onClick={()=>setCount(count-1)} className='border-r-2 text-center w-20 border=[#bfbfbf] text-5xl'>-</button>
        <div className='font-bold gap-12 text-5xl'>{count}</div>
        <button onClick={incrementHandler} className='border-l-2 text-center w-20 border=[#bfbfbf] text-5xl'>+</button>
      </div>
      <button onClick={reset} className=' bg-sky-500 text-white px-5 py-2 rounded-sm text-lg'>Reset</button>
      
    </div>
  )
}

export default App
