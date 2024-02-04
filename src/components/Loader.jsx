import React from 'react'
import './Loader.css'

 const Loader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 h-[80vh]'>
        <div className="loader text-2xl"></div>
        <p className= "text-[1.5rem] font-semibold text-white text-center ">Loading...</p>
    </div>
  )
}

export default Loader;
