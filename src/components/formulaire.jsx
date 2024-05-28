import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTask } from "../redux/ArraySlice";

export const Formulaire =()=>{

    const tableau = useSelector((state)=>state.tableauTask)
    const dispatch = useDispatch()

    const InputTask = useRef(null)

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if (InputTask.current.value !=="") {

            dispatch(AddTask(InputTask.current.value))

            InputTask.current.value = "";
        }
        
    }
    
    return(
        <>

           
                 <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Add a new task" className="p-3 text-2xl rounded-2xl" ref={InputTask}/>
                    <button className="bg-green-300 rounded-2xl ml-4 py-4 px-8" >Add</button>
                 </form>
        </>
    )
}