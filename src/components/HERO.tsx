import Image from "next/image"
export default function Hero (){
    return(
        <div className="flex w-full flex-col flex-wrap  bg-[black] h-screen text-[#EFBC57]">    
              <div className="flex w-full flex-col  h-screen text-[#EAC872] justify-center items-center"
          
        >
                <Image src={'/hero.png'} alt="logo" width={350} height={350} className="pt-3 "/>
                <h1 className="text-6xl flex pt-10 font-extrabold text-center system-ui - 400 flex-wrap">Ayesha Waseem</h1>
                <p className="text-2xl flex-col w-[700px] pt-4 text-center flex-wrap">A passionate web developer and designer from Pakistan. With a keen eye for detail and
                     a commitment to creating visually appealing, user-friendly websites, I bring together
                      creativity and technical expertise to deliver high-quality digital solutions.</p>
                      </div>
            </div>
       
    )

}