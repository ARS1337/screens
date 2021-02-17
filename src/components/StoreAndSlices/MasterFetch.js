import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchMasterData = createAsyncThunk(
    "MasterFetch",
    async(url, init, thunkAPI) => {
        let temp = await fetch(url, init);
        console.log(temp);
        return temp.json();
    }
);

export const MasterSlice = createSlice({
    name: 'MasterFetch',
    initialState: { categories: [], servingType: [] },
    reducers: {},
    extraReducers: {
        [fetchMasterData.pending]: (state, action) => {

        },
        [fetchMasterData.rejected]: (state, action) => {

        },
        [fetchMasterData.fulfilled]: (state, action) => {
            // state.categories = action.getHomeFoodTypes,
            // state.servingType = action.getMenusServingType
        },
    }
})