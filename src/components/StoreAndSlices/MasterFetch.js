import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMasterData = createAsyncThunk(
    "MasterFetch/fetchMasterData",
    async(data, thunkAPI) => {
        let temp = await fetch(data[0], data[1]);
        return temp.json();
    }
);

export const MasterSlice = createSlice({
    name: "MasterFetch",
    initialState: { categories: [], servingType: [] },
    reducers: {},
    extraReducers: {
        [fetchMasterData.pending]: (state, action) => {},
        [fetchMasterData.rejected]: (state, action) => {
            console.log("rejected");
        },
        [fetchMasterData.fulfilled]: (state, action) => {
            console.log("fulfilled");
            console.log(action);
            state.categories = action.payload.getHomeFoodTypes;
            state.servingType = action.payload.getMenusServingType;
        },
    },
});