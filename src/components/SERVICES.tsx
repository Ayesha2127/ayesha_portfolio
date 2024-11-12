
        import Link from "next/link"
        export default function Services(){
            return(
               <div className="bg-black flex-wrap p-3">
                <div className="text-2xl text-[#EFBC57] font-bold uppercase flex justify-center items-center py-6">My Services</div>
                <div className="flex flex-wrap justify-center items-center py-4 px-3 gap-7">
                <div className="justify-center items-center flex flex-wrap border border-white rounded-lg w-[300px] h-[300px]">
                    <h1 className="text-[#EFBC57] text-2xl font-bold py-3">Modern Web Designing</h1>
                    <p className="text-[#EFBC57] text-lg px-2 py-2 text-center">Crafting elegant websites that prioritize aesthetics and usability, designed to captivate users and bring a brand&apos;s vision to life.</p>
                    <Link href={"/"}><button className="rounded-lg py-2 px-3 bg-[#EFBC57] text-black border border-white text-lg lowercase">View Project</button></Link>
                </div>

                <div className="justify-center items-center flex flex-wrap border border-white rounded-lg w-[300px] h-[300px]">
                    <h1 className="text-[#EFBC57] text-2xl font-bold py-3">UI/UX Designing</h1>
                    <p className="text-[#EFBC57] text-lg px-2 py-2 text-center">I create intuitive UI/UX designs that blend functionality with aesthetics, offering seamless user experiences.</p>
                    <Link href={"/"}><button className="rounded-lg py-2 px-3 bg-[#EFBC57] text-black border border-white text-lg lowercase">View Project</button></Link>
                </div>

                <div className="justify-center items-center flex flex-wrap border border-white rounded-lg w-[300px] h-[300px]">
                    <h1 className="text-[#EFBC57] text-2xl font-bold py-3 text-center">JavaScript Development</h1>
                    <p className="text-[#EFBC57] text-lg px-2 py-2 text-center">I specialize in building efficient JavaScript applications that deliver smooth and engaging user experiences.</p>
                    <Link href={"/"}><button className="rounded-lg py-2 px-3 bg-[#EFBC57] text-black border border-white text-lg lowercase">View Project</button></Link>
                </div>
               </div>
               </div>
    )
}