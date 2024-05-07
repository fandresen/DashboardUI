import { Link } from "react-router-dom";

const Menu = ()=>{

    return (
    <>
       <div className="flex flex-col min-w-[15vw] max-w-[18vw] h-auto float-left bg-[#F8F9FA]">
        <div className="max-h-[100vh] ">
        <div className="m-[11%] mb-[15%]"> 
                <img src="/./src/assets/icon/logo-creative-tim-black.png" alt="logo" className="inline mr-2"/> 
                <h1 className="inline font-semibold">PURITY UI DASHBOARD</h1>
            </div>
    
           
            <Link to="/">
                <div className="mx-5 min-h-8 w-[80%] hover:bg-white py-[2%] pl-3 rounded-xl hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white mr-4 mb-1 p-3 bg-[#4FD1C5] rounded-2xl inline">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>  
                    <h1 className="inline font-semibold text-sm">Dashboard</h1>
                </div>
            </Link>
                
           
    
           
            <Link to="/tables">
                <div className="mx-5 min-h-8 w-[80%] hover:bg-white  py-3 pl-3 rounded-xl hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#4FD1C5] mr-4 mb-1 p-3 bg-white rounded-2xl inline">
                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                    </svg>
                    <h1 className="inline font-semibold text-[#A0AEC0] text-sm">Tables</h1>
                </div>
            </Link>
               
           
    
           
            <Link to="/billing">
                <div className="mx-5 min-h-8 w-[80%] hover:bg-white  py-3 pl-3 rounded-xl hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#4FD1C5] mr-4 mb-1 p-3 bg-white rounded-2xl inline">
                        <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                        <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                    </svg>
                    <h1 className="inline font-semibold text-[#A0AEC0] text-sm">Billing</h1>
                </div>
            </Link>

    
          
            <Link to="rtl">
                <div className="mx-5 min-h-8 w-[80%] hover:bg-white  py-3 pl-3 rounded-xl hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#4FD1C5] mr-4 mb-1 p-3 bg-white rounded-2xl inline">
                        <path  d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"/>
                    </svg>
                    <h1 className="inline font-semibold text-[#A0AEC0] text-sm">RTL</h1>   
                </div>        
            </Link>

    
            <h1 className="inline font-semibold text-xl ml-5 text-[#2D3748] my-4">ACCOUNT PAGES</h1>
    
            
            <Link to="/profile">
                <div className="mx-5 min-h-8 w-[80%] hover:bg-white  py-3 pl-3 rounded-xl hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#4FD1C5] mr-4 mb-1 p-3 bg-white rounded-2xl inline">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>
                    <h1 className="inline font-semibold text-[#A0AEC0] text-sm">Profile</h1>
                </div>
            </Link>

    
         
                <Link to="/signIn">
                    <div className="mx-5 min-h-8 w-[80%] hover:bg-white  py-3 pl-3 rounded-xl hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#4FD1C5] mr-4 mb-1 p-3 bg-white rounded-2xl inline">
                            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                        </svg>
                        <h1 className="inline font-semibold text-[#A0AEC0] text-sm">Sign Up</h1>
                    </div>
                </Link>

    
           
            <Link to="/signUp">
                <div className="mx-5 min-h-8 w-[80%] hover:bg-white  py-3 pl-3 rounded-xl hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#4FD1C5] mr-4 mb-1 p-3 bg-white rounded-2xl inline">
                        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                        <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                    </svg>
                    <h1 className="inline font-semibold text-[#A0AEC0] text-sm">Sign Up</h1>
                </div>
            </Link>
         
    
            <div className="flex flex-col w-[80%] min-h-[24vh] bg-[#4FD1C5] mx-auto mt-20 rounded-2xl mb-20">
    
                <div className="ml-4 mt-6 min-h-8 w-16 rounded-3xl p-2 bg-white text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 inline text-[#4FD1C5]">
                     <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />  
                    </svg>
                </div>
                <h1 className="text-white font-semibold ml-4 mt-4 text-xl">Need help?</h1>
                <h3 className="text-white font-[400] ml-4 mt-1 mb-4 text-sm">Please check our docs</h3>
                <button className="py-3 px-auto bg-white w-[80%] mx-auto mb-6 rounded-2xl text-sm font-[500]">DOCUMENTATION</button>
            </div>
        </div>
            
       </div>
    
    </>
    )
    }
    export default Menu;