import { configureStore } from "@reduxjs/toolkit";
import ArraySlice from "./ArraySlice";

export const store = configureStore ({
    reducer:{
        tableauTask: ArraySlice
    },
})


//slice




//action  (Modify the state) (type:"TYPE",payload: )


//Reducer 