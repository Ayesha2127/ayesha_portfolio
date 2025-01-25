import React from 'react'
import { RiMailSendFill } from "react-icons/ri";
import { LuLinkedin } from "react-icons/lu";


export default function Social () {
    return(
      <div className='bg-black flex flex-col justify-center item center text-center gap-4 '> 
         <h1 className='bg-black justify-center items-center text-center text-3xl text-[#EFBC57] font-semibold'>Follow Me.</h1>
        <div className='py-4 flex flex-wrap justify-center item center text-center gap-8'>
         
<div className=' text-red-200'>
{/* Wrap the icon with a mailto link */}
<a href="mailto:ayeshawaseem2127@gmail.com" target="_blank" rel="noopener noreferrer">
<RiMailSendFill size={45}/> 
 </a>
</div>



<div className=' text-blue-300'>
   {/* Wrap the icon with a mailto link */}
<a href="https://www.linkedin.com/in/ayesha-waseem-b127532bb/" target="_blank" rel="noopener noreferrer">
<LuLinkedin size={45}/> 
 </a>
</div>



</div>
</div>

       
    )
}