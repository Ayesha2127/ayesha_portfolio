import Image from "next/image";
import Link from "next/link";
export default function Projects (){
    return(
        <div className="font-bold text-center uppercase text-4xl py-7 bg-black h-screen text-[#EFBC57] flex-wrap">
            my projects
            

            <div className="flex justify-center items-center py-11 gap-20 flex-wrap">
            <div className="border border-white text-[#EFBC57] rounded-lg w-[300px] h-[430px]">
            <Image src={'/figma.jpg'} alt="/" width={300} height={300} className="justify-center items-center px-3 py-4"/>
                <h1 className="text-xl py-2 "> The Cakery
                    <p className="text-lg lowercase "> My Figma project is a cake shop design that highlights different cake 
                                     varieties with clean, attractive visuals.</p>
                </h1>
                <Link href={"/"}><button className="rounded-lg py-3 px-3 bg-[#EFBC57] text-black text-lg lowercase">View Project</button></Link>
            </div>


            <div className="border border-white text-[#EFBC57] rounded-lg w-[300px] h-[430px]">
            <Image src={'/coffee.jpg'} alt="/" width={300} height={300} className="justify-center items-center px-3 py-4"/>
                <h1 className="text-xl py-2 "> Caffeine Blend
                    <p className="text-lg lowercase "> The Caffeine Blend project is a coffee shop design that 
                                                       focuses on offering a vide range of coffee welcoming 
                                                       environment.</p>
                </h1>
                <Link href={"/"}><button className="rounded-lg py-3 px-3 bg-[#EFBC57] text-black text-lg lowercase">View Project</button></Link>
            </div>



            <div className="border border-white text-[#EFBC57] rounded-lg w-[300px] h-[430px]">
            <Image src={'/port.jpg'} alt="/" width={300} height={300} className="justify-center items-center px-3 py-4"/>
                <h1 className="text-xl py-2 "> Portfolio Project
                    <p className="text-lg lowercase "> My portfolio displays my web development skills, featuring
                                                       my top projects and creating responsive websites</p>
                </h1>
                <Link href={"/"}><button className="rounded-lg py-3 px-3 bg-[#EFBC57] text-black text-lg lowercase">View Project</button></Link>
            </div>
            </div>


        </div>
    )
}