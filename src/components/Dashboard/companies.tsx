export const Companies = ({src,description})=>{
    return(
        <>
         <div className="py-2 flex">
            <img src={src} alt="Logo Companies"/>
            <h2 className="font-semibold text-sm ml-2 text-[#2D3748]">{description}</h2>
         </div>
        </>
    )
}
