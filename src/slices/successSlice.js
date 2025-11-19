import { createSlice } from "@reduxjs/toolkit";



export const successSlice=createSlice({
    name:"success",
    initialState:
        false
    ,
    reducers:{
        setSuccess:(state,action)=> action.payload
        
    },

});

export const {setSuccess} = successSlice.actions;
export default successSlice.reducer