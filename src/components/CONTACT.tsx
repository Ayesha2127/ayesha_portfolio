export default function Contact() {
    return (
      <section className="flex justify-center items-center gap-10 flex-col bg-black text-[#EFBC57] py-6">
        <h1 className="text-5xl text-center font-semibold uppercase">Get In Touch</h1>
        <form className="w-[630px] h-full">
          
          <div className="flex flex-wrap gap-4">
            <input
              type="text" 
              placeholder="First Name"
              required
              className="p-3 bg-transparent border-2 w-[300px] py-3 border-[#EFBC57] rounded-lg
               placeholder-[#EFBC57] focus:outline-none"
            />

            <input
              type="text"
              placeholder="Last Name"
              required
              className="p-3 bg-transparent border-2 w-[300px] py-3 border-[#EFBC57] rounded-lg
               placeholder-[#EFBC57] focus:outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              required
              className="p-3 bg-transparent border-2 w-[300px] py-3 border-[#EFBC57] rounded-lg
               placeholder-[#EFBC57] focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 bg-transparent border-2 w-[300px] py-3 border-[#EFBC57] rounded-lg 
               placeholder-[#EFBC57] focus:outline-none"
            />

            <textarea
              placeholder="Message"
              required
              className="p-3 bg-transparent border-2 w-[615px] py-3 border-[#EFBC57] rounded-lg
               placeholder-[#EFBC57] focus:outline-none h-40"
            />
          </div>
  
          <button className=" justify-center items-center py-3 bg-[#EFBC57] px-5 mt-3 text-black rounded-lg font-bold border border-[#EFBC57]">
            SUBMIT
          </button>
        </form>
      </section>
      
    );
  }
  