import { configureStore } from "@reduxjs/toolkit";
import { MasterSlice } from "./MasterFetch";

export default configureStore({
    reducer: MasterSlice.reducer
})