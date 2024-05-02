import { Line } from "react-chartjs-2";
import { Chart,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend } from "chart.js";

Chart.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)
const SalesOverview = ()=>{

    const options ={};
    const data = {
        labels:[
            "January",
            "Febroary",
            "March",
            "April",
            "May",
            "June",
            "Jully",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        datasets: [
            {
                label:"Sales Overview",
                data: [500,150,250,220,100,180],
                borderColor:"#2D3748",
                borderWidth:4,
                fill:true,
                pointRadius:0,
                lineTension: 0.4
            },
            {
                label:"Sales Overview",
                data: [200,220,350,460,300,350,110,400],
                borderColor:"#4FD1C5",
                borderWidth:4,
                fill:true,
                pointRadius:0,
                lineTension: 0.3
            }
        ]}
    

return (
<>
    <div className="w-[40vw]">
    <Line options={options} data={data}/>
    </div>
</>
)
}
export default SalesOverview;