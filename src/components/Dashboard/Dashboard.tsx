import { useEffect, useState } from "react";
import Information from "./Information";
import ProgressionComponent from "./progressionComponent";
import axios from "axios";
import Activeuser from "./ActiveUser";
import SalesOverview from "../chart/SalesOverviex";

export interface dataProgression {
  id:number,
  title:string,
  amount:number,
  status:boolean,
  progression:number,
  icon:string
}

const Dashboard = ()=>{

    const [progressionData,setprogressionData] = useState<object>([])

    const fetchData = async ()=>{
        const response = (await axios.get('http://192.168.1.124:3000/ListProgessionComponents')).data;
        setprogressionData(response);
  }


  useEffect(()=>{
    fetchData() 
  },[])

return (
<>
    <div className="flex min-w-[78vw] mb-4 mr-4 justify-between">
    {
        progressionData.map((data:dataProgression)=>(
          <ProgressionComponent key={data.id} 
          title={data.title} 
          amount={data.amount} 
          status={data.status} 
          progression={data.progression} icon={data.icon} />
        ))
      }
    </div>
    

      <Information/>
      <div className="flex">
        <Activeuser/>
        <SalesOverview/>
      </div>
     
</>
)
}
export default Dashboard;