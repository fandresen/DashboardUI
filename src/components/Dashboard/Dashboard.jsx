import { useEffect, useState } from "react";
import Information from "./Information";
import ProgressionComponent from "./progressionComponent";
import axios from "axios";

const Dashboard = ()=>{
    const [progressionData,setprogressionData] = useState([])

    const fetchData = async ()=>{
        const response = (await axios.get('http://localhost:3000/ListProgessionComponents')).data;
        setprogressionData(response);
  }

  useEffect(()=>{
    fetchData()  
  },[])

return (
<>
    <div className="flex min-w-[80vw] justify-between">
    {
        progressionData.map((data)=>(
          <ProgressionComponent key={data.id} 
          title={data.title} 
          amount={data.amount} 
          status={data.status} 
          progression={data.progression} icon={data.icon} />
        ))
      }
    </div>
    

      <Information/>
</>
)
}
export default Dashboard;