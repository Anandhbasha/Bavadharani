import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "../Slice/Slice";

export const Store = configureStore({
    reducer:{
        numberCount:countSlice.reducer
    }
})