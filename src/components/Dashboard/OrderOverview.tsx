import axios from "axios"
import { useEffect, useState } from "react"

type Toverview = {
    icon:string;
    overview:string;
    date:string;
}

export const OrderOveriew = ()=>{
    const [dataOverview,setData]=useState<Toverview[]>()

    const fetchData = async ()=>{
        const response = (await axios.get('http://192.168.1.124:3000/OrderOverview')).data;
        setData(response)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <>
         <div className="w-[25vw] bg-white ml-4 rounded-3xl">
            <h1 className="text-2xl font-semibold text-[#2D3748]">Orders overview</h1>
            <h2 className="text-[#A0AEC0]"><span className="text-[#4FD1C5]">(+30%)</span>this Month</h2>

            <div>
                {
                    dataOverview?.map((data)=>(
                        <Order icon={data.icon} overview={data.overview} date={data.date}/>
                    ))
                }
            </div>
         </div>
        </>
    )
}

const Order =({icon,overview,date})=>{
    <div className="w-[10vw] mt-8">
         <div className="flex">
            <img src={icon} alt="icon" />
            <h2 className="font-semibold text-lg">{overview}</h2>
        </div>
        <div className="flex">
            <div className="h-20 w-1 bg-gray-500"></div>
            <h2 className="text-[#A0AEC0]">{date}</h2>
        </div>
    </div>
   
}
