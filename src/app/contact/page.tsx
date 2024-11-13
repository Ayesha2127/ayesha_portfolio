import Contact from "@/components/CONTACT";
import Social from "@/components/SOCIAL";

export default function contact (){
    return(
        <div className="flex flex-col gap-20 bg-black w-full ">
            <Contact/>
            <Social/>
        </div>
    )
}