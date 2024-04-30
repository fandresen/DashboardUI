
const Information = ()=>{

return (
<>
   <div className="flex w-[84vw] min-h-[30vh] justify-between">
        <div className="relative flex w-[50vw] pl-5 justify-between bg-white rounded-xl">
          <div>
                <h3 className="text-[#A0AEC0] text-lg mt-6">Buid By Developers</h3>
                <h1 className="text-[#2D3748] text-2xl font-semibold my-1">Purity UI Dashboard</h1>
                <p className="text-[#A0AEC0] text-sm w-80">
                    From colors, card, typography to complex elements, 
                    you will find the full documentaion
                </p>

                <a href="#" className="absolute bottom-5 left-8 text-[#2D3748] font-bold text-md">
                    Read More 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2 inline">
                        <path d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"/>
                        </svg>
                </a>
          </div>
          <div>
                <img src="./src/assets/icon/images/og-image 1.png" alt="chakra" className="min-w-64 rounded-2xl my-4"/>
          </div>

        </div>

        <div className="w-[30vw] mr-4 my-2 bg-white rounded-xl bg-[url('./src/assets/icon/images/bg_information.png')] bg-no-repeat bg-cover relative">

            <h1 className="text-white font-semibold text-xl ml-10 mt-4 z-20">Work with Rockets</h1>
            <p className="text-white text-md ml-10 z-20">
              Wealts creation is an evolutionarily recent positive-sum game. <br />
              It is all about who take the opportunity first.
            </p>
             <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-65 rounded-xl z-0"></div>
            <a href="#" className="absolute bottom-5 left-8 text-white font-bold text-md">
                Read More 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2 inline text-white">
                    <path d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"/>
                 </svg>
            </a>
        </div>

   </div>
</>
)
}
export default Information;