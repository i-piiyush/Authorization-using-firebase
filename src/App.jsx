
import { useState } from 'react';
import './App.css'
import { TbMessageFilled } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import Signup from './Signup';


function App() {

const [isFollowed,setIsFollowed] = useState(false)
  return (
    <div className='relative'>
    <div className='h-screen w-screen relative flex flex-col  '>
       <div className='bg-gray-300 w-full h-40'></div>
       <div className='bg-gray-600 w-28 h-28 rounded-full absolute top-[13%] left-5'></div>
       <div className=' w-full h-[10%] flex items-center justify-end gap-2 px-5'>
        <button className='bg-gray-100 px-7 h-8 rounded-md text-gray-700' onClick={()=>{
          setIsFollowed(!isFollowed)
        }}>{isFollowed == true ? `following` : `follow`}</button>
        <button className='border border-gray-100 px-7 h-8 rounded-md text-gray-100'><TbMessageFilled /></button>
       </div>
       <div className='p-5'>
        <h1 className='text-2xl'>Lorem, ipsum.</h1>
        <h1 className='font-light opacity-75'>@username</h1>
        <h1 className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae eum</h1>
       </div>
       <div className=' w-full flex-grow flex  justify-center items-center'> 
        < CiCamera size={"5em"}/>
        
        
       </div>
       
    </div>
    <Signup />
     
    </div>
  )
}

export default App
