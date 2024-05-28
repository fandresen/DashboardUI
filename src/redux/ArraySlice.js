import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [{
    id:0,
    value:""
}];
let id =1;

const ArraySlice = createSlice({
    name: "tableau",
    initialState,
    reducers : {
        AddTask: (state,action)=>{
            state.push({id:id++,value:action.payload});      
            console.log(state);  
        },
        removeTask: (state,action)=>{
            const index = state.findIndex((e) => e.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
            console.log('delete task : ',action.payload);
            console.log(state);
        } 

    },
})

export const {AddTask,removeTask} = ArraySlice.actions
export default ArraySlice.reducer;