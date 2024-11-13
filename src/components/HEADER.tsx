import Link from "next/link"
import Image from "next/image"
export default function Header() {
    return(
        <nav className="w-full h-full gap-3 bg-[#EAC872] flex justify-between items-center px-11  uppercase flex-wrap
        lg:h-20">
            <Image src={'/logo.png'} alt="logo" width={100} height={100}/>
            <ul className="flex  gap-10 flex-wrap text-xl font-bold">
                <li className=" hover:text-[#633100]"><Link href={"/"}>Home</Link></li>
                <li className=" hover:text-[#633100]"><Link href={"/services"} >Services</Link></li>  
                <li className=" hover:text-[#633100]"><Link href={"/projects"} >Projects</Link></li>               
            </ul>
            <button className="text-xl font-bold border border-black rounded-3xl py-2 px-5 uppercase  hover:text-[#633100]">
           <Link href={"/contact"}>Contact</Link>
            </button> 
        </nav>
    )
}