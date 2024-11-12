import Link from "next/link"
export default function Footer(){
    return(
        <footer className="flex justify-center items-center">
            
            <div className="w-full bg-[#EAC872] text-center justify-center items-center px-11"> 
            
            <ul className="flex gap-7 pr-20 text-lg font-bold text-center justify-center items-center py-4"> 
                <li className=" hover:text-[#633100]"><Link href={"/"}>Home</Link></li>
                <li className=" hover:text-[#633100]"><Link href={"/services"} >Services</Link></li>  
                <li className=" hover:text-[#633100]"><Link href={"/projects"} >Projects</Link></li> 
                <li className=" hover:text-[#633100]"><Link href={"/contact"}>Contact</Link></li>              
            </ul>
           <div className="font-mono text-lg text-black">
            created by Ayesha Waseem
           </div>
        </div>
        </footer>
    )
}