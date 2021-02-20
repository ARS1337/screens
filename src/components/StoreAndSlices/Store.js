import { configureStore } from "@reduxjs/toolkit";
import { tokenSlice } from "./HandleLogin";
import { combineReducers } from "@reduxjs/toolkit";
import { MasterSlice } from "./MasterFetch";
import { otherSlice } from "./PosRelData";
import { VideoSlice } from "./VideoFetch";
import { EnquirySlice } from "./SendEnquiry";
import { Location } from "./Location";

let rootReducer = combineReducers({
    tokenReducer: tokenSlice.reducer,
    masterReducer: MasterSlice.reducer,
});

export default configureStore({
    reducer: {
        token: tokenSlice.reducer,
        masterData: MasterSlice.reducer,
        otherData: otherSlice.reducer,
        video: VideoSlice.reducer,
        Enquiries: EnquirySlice.reducer,
        Location: Location.reducer,
    }
});