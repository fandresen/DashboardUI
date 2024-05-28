import { useDispatch, useSelector } from "react-redux"
import { removeTask } from "../redux/ArraySlice";
import { useState } from "react";

export const List =()=>{

    const tableau = useSelector((state)=>state.tableauTask)
    const dispatch = useDispatch()
   const [removeFrom,setRemoveFrom]=useState(null)

    const handleDelete =(id)=>{
        setRemoveFrom(id)
        setTimeout(()=>{
            dispatch(removeTask(id))
            setRemoveFrom(null)
        },500)
        
    }
    const TaskListTab = tableau.filter((e)=>e.id!==0)

    return(
        <> 
            <div className="text-center pt-16">
                {
                    TaskListTab.map((e)=>(
                        <div className={`bg-white w-[70%] p-5 my-3 mx-auto text-xl shadow-md shadow-black rounded-lg flex justify-between  transition-transform duration-500 ease-in-out${removeFrom == e.id? 'transform translate-x-[3000px] opacity-65':''}`}key={e.id}>
                            <h1 className="text-2xl font-bold text-gray-500 mt-2 ml-3">{e.value}</h1>
                            <button className="bg-red-500 p-2 text-white rounded-lg"onClick={()=>handleDelete(e.id)}>Delete</button>
                        </div>
                    ))
                }

            </div>

        </>
    )
}