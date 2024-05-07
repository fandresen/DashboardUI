import axios from "axios";
import { Companies } from "./companies"
import { ProgessionBar } from "./completion"
import { MembersPic } from './members';
import { useEffect, useState } from "react";

export const ProjectBox = ()=>{

    type Tdata = {
        logo:string;
        description: string;
        members : any;
        budget : number;
        completion:number;
    }

    const [data,setData]=useState<Tdata[]>();

    const fetchData = async ()=>{
        const response = (await axios.get('http://192.168.1.124:3000/Project')).data;
        setData(response)
    }

    useEffect(()=>{
        fetchData();
    },[])

    return(
        <>
            <div className="min-h-[20vh] pr-6 bg-white p-2 relative mt-5 pl-4 rounded-3xl">

                <h1 className="text-xl font-semibold mt-3">Project</h1>

                <div className="absolute top-5 right-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
                </div>
                
                <div className="mt-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#4FD1C5h]">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    <h2>30 done this month</h2>
                </div>

                
               

                <table className="mt-5">
                    <tr className="text-sm text-[#A0AEC0] border-b-2 text-left">
                        <th className="pb-3">COMPANIES</th>
                        <th className="pb-3">MEMBERS</th>
                        <th className="pb-3">BUDGET</th>
                        <th className="pb-3">COMPLETION</th>
                    </tr>
                    <tbody>
                    {
                        data?.map((data)=>(
                        <tr className="border-b-2">
                            <td className="pr-[6vw] py-2"><Companies src={data.logo} description={data.description}/></td>
                            <td className="pr-[6vw] py-2"> <MembersPic ImageData={data.members}/></td>
                            <td className="pr-[6vw] py-2">{data.budget==0?"Not set" :data.budget}</td>
                            <td className="pr-[6vw] py-2"><ProgessionBar width={data.completion}/></td>
                        </tr>
                        ))
                    }

                    </tbody>
                   
                </table>


            </div>
        </>
    )
}
