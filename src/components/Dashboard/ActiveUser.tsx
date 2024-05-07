import axios from "axios";
import { useEffect, useState } from "react";
import FirstChart from "../chart/FirstChart";
import { ProgessionBar } from "./completion";

interface dataActiveUserData {
    id:number,
    title:string,
    value:string,
    icon:string,
    progression:number,
}

const Activeuser = ()=>{

    const [dataActiveUser,setDataActiveUser]=useState<object>([])
    const [dataChart1,setdataChart1] =useState<object>([])

    const fetchDataChart1 = async ()=>{
        const response:object = (await axios.get('http://192.168.1.124:3000/chart1Data')).data;
        setdataChart1(response);
    }

    const fetchDataActiveUsers = async ()=>{
        const response:object = (await axios.get('http://192.168.1.124:3000/ActiveUserData')).data;
        setDataActiveUser(response);
    }

useEffect(()=>{
    fetchDataChart1() 
    fetchDataActiveUsers() 
  },[])


return (
    <>
        <div className="w-[40vw] bg-white rounded-3xl mt-5">
            <FirstChart data={dataChart1}/>
            <h1 className="text-2xl mt-4 ml-3 font-semibold text-[#2D3748]">Active Users</h1>
            <h2 className="text-[#A0AEC0] ml-3"><span className="text-[#4FD1C5]">(+23)</span>than last Week</h2>
            <div className="flex justify-around">
                {
                    dataActiveUser.map((data:dataActiveUserData)=>(
                        <ActiveuserData key={data.id}
                                        title={data.title} 
                                        value={data.value} 
                                        icon={data.icon} 
                                        progression={data.progression}/>
                    ))
                }
            </div>
        </div>
     
    </>
)
}
export default Activeuser;

const ActiveuserData = ({title,value,icon,progression}:dataActiveUserData)=>{

    return (
        <>
            <div className=" min-h-[10vh] m-1 bg-white p-3 rounded-xl">
                <div className="flex">
                    <div className="bg-[#4FD1C5] min-h-12 p-2 mt-4 rounded-xl">
                        <img src={icon} alt="icon" className="w-7 h-7 text-white"/>
                    </div>
                    <h1 className="text-[#A0AEC0] text-lg ml-2 mt-3 pt-3 pb-2 font-bold">{title}</h1>
                </div>
                
                <div className="pt-2">
                    <h3 className="text-[#2D3748] text-2xl inline font-bold">{value}</h3>
                      {/* Progress */}
                    <ProgessionBar width={progression}/>

                </div>
            </div>
        </>
    )
}