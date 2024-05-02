import axios from "axios";
import { useEffect, useState } from "react";
import FirstChart from "../chart/FirstChart";

const Activeuser = ()=>{

    const [dataActiveUser,setDataActiveUser]=useState([])
    const [dataChart1,setdataChart1]=useState([])

    const fetchDataChart1 = async ()=>{
        const response = (await axios.get('http://192.168.1.124:3000/chart1Data')).data;
        setdataChart1(response);
    }

    const fetchDataActiveUsers = async ()=>{
        const response = (await axios.get('http://192.168.1.124:3000/ActiveUserData')).data;
        setDataActiveUser(response);
    }

useEffect(()=>{
    fetchDataChart1() 
    fetchDataActiveUsers() 
  },[])


return (
    <>
        <div className="w-[40vw] bg-white rounded-3xl mt-10">
            <FirstChart data={dataChart1}/>
            <h1 className="text-lg text-[#2D3748] mt-5">Active Users</h1>
            <h2 className="text-[#A0AEC0]"><span className="text-[#4FD1C5]">(+23)</span>than last Week</h2>
            <div className="flex">
                {
                    dataActiveUser.map((data)=>(
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

const ActiveuserData = ({title,value,icon,progression})=>{

    return (
        <>
            <div className=" min-h-[10vh] m-1 bg-white p-3 rounded-xl">
                <div className="bg-[#4FD1C5] h-12 p-2 pb-3 mt-4 rounded-xl">
                    <img src={icon} alt="icon" className="w-8 h-8 text-white"/>
                    <h1 className="text-[#A0AEC0] text-sm pt-3 pb-2 font-bold">{title}</h1>
                </div>
                <div className="pl-5">
                    <h3 className="text-[#2D3748] text-2xl inline font-bold">{value}</h3>
                    <h3 className="text-[#48BB78] text-lg ml-3 inline font-bold">{progression}%</h3>
                </div>
            </div>
        </>
    )
}