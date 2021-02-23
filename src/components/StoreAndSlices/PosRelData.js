import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import makeRequest from './../fetchh';
import { fetchLocation } from './Location';

export const fetchPosRelData = createAsyncThunk(
    "otherSlice/fetchPosRelData",
    async(data, thunkAPI) => {
        let temp = await makeRequest(data[0], data[1], data[2]);
        return temp.json();
    }
);

export const otherSlice = createSlice({
    name: "otherSlice",
    initialState: {
        hotelsNearby: [],
        recommended: [],
        topPicks: [],
        nearbyKitchens: 0,
        doneLoading: "pending",
    },
    reducers: {},
    extraReducers: {
        [fetchPosRelData.pending]: (state, action) => {
            state.doneLoading = "pending";
        },
        [fetchPosRelData.rejected]: (state, action) => {
            state.doneLoading = "rejected";
        },
        [fetchPosRelData.fulfilled]: (state, action) => {
            state.doneLoading = "fulfilled";
            if (action.payload.success == 1) {
                if ([action.meta.arg[3]] == "hotelsNearby") {
                    state[[action.meta.arg[3]]] = action.payload.near_by_hotels;
                    state.nearbyKitchens = 1;
                } else if ([action.meta.arg[3]] == "topPicks") {
                    state[[action.meta.arg[3]]] = action.payload.data;
                } else if ([action.meta.arg[3]] == "recommended") {
                    state[[action.meta.arg[3]]] = action.payload.recommended_arr;
                }
            } else {
                if ([action.meta.arg[3]] == "hotelsNearby") {
                    state.nearbyKitchens = 0;
                    // alert(action.payload.message);
                }
            }
        },
    },
});