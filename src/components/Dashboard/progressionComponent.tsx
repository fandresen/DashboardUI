
const ProgressionComponent = ({title,amount,status,progression,icon})=>{

    return (
    <>
    
       <div className="flex flex-row justify-between min-w-[20vw] min-h-[10vh] m-1 bg-white p-3 rounded-xl">
         <div className="pl-5">
            <h1 className="text-[#A0AEC0] text-sm pt-3 pb-2 font-bold">{title}</h1>
            <h3 className="text-[#2D3748] text-2xl inline font-bold">{amount}</h3>
            <h3 className="text-[#48BB78] text-lg ml-3 inline font-bold">{progression}%</h3>
         </div>
    
         <div className="bg-[#4FD1C5] h-12 p-2 pb-3 mt-4 rounded-xl">
          <img src={icon} alt="icon" className="w-8 h-8 text-white"/>
         </div>
           
       </div>
    </>
    )
    }
    export default ProgressionComponent;