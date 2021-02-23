import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import makeRequest from './../fetchh';

export const fetchMasterData = createAsyncThunk(
    "MasterFetch/fetchMasterData",
    async(url, thunkAPI) => {
        let temp = await makeRequest(url);
        return temp.json();
    }
);

export const MasterSlice = createSlice({
    name: "MasterFetch",
    initialState: { categories: [], servingType: [], doneLoading: "pending" },
    reducers: {},
    extraReducers: {
        [fetchMasterData.pending]: (state, action) => {
            state.doneLoading = "pending"
        },
        [fetchMasterData.rejected]: (state, action) => {
            state.doneLoading = "rejected";
        },
        [fetchMasterData.fulfilled]: (state, action) => {
            state.doneLoading = "fulfilled";
            state.categories = action.payload.getHomeFoodTypes;
            state.servingType = action.payload.getMenusServingType;
        },
    },
});