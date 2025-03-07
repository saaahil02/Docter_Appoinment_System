import { configureStore } from "@reduxjs/toolkit";
import { alterSlice } from "./features/alertSlice";

export default configureStore({
    reducer:{
        alerts:alterSlice.reducer,
    }
})