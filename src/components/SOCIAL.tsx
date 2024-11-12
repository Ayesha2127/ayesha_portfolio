import React from 'react'
import { RiMailSendFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";

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


<div className=' text-pink-500'>
   {/* Wrap the icon with a mailto link */}
<a href="https://www.instagram.com/ayeshawaseem27?igsh=Mjh6M2s3eHllZjFs" target="_blank" rel="noopener noreferrer">
<SiInstagram size={45}/> 
 </a>
</div>


<div className=' text-blue-300'>
   {/* Wrap the icon with a mailto link */}
<a href="https://www.linkedin.com/in/ayesha-waseem-b127532bb/" target="_blank" rel="noopener noreferrer">
<LuLinkedin size={45}/> 
 </a>
</div>


<div className=' text-gray-300'>
   {/* Wrap the icon with a mailto link */}
<a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
<FaGithub size={45}/> 
 </a>
</div>


<div className=' text-blue-500'>
   {/* Wrap the icon with a mailto link */}
<a href="https://www.facebook.com/share/1DSUv5HjDh/" target="_blank" rel="noopener noreferrer">
<FaFacebook size={45}/> 
 </a>
</div>
</div>
</div>

       
    )
}