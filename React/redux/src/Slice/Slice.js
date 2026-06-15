import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name:"counts",
    initialState:{
        count:0,bg:"dark"
    },
    reducers:{
        addCount:(state,action)=>{state.count+=action.payload},
        changeBg:(state)=>{state.bg==="dark"?state.bg="light":state.bg="dark"}
    }
})

export const {addCount,changeBg} = countSlice.actions