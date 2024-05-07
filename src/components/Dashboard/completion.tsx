export const ProgessionBar = ({width})=>{
    return(
        <>
            <div className="mb-6 h-1 w-24 bg-gray-100 dark:bg-gray-300">
                <div className="h-1 bg-[#4FD1C5]" style={{ width: `${width}%` }}></div>
            </div>
        </>
    )
}
