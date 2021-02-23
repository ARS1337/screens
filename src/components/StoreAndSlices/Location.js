import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLocation = createAsyncThunk(
    "Location/fetchLocation",
    async(thunkAPI) => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }
);

export const Location = createSlice({
    name: "Location",
    initialState: { latitude: "", longitude: "", doneLoading: "pending" },
    reducers: {},
    extraReducers: {
        [fetchLocation.pending]: (state, action) => {
            state.doneLoading = "pending"
        },
        [fetchLocation.rejected]: (state, action) => {
            state.doneLoading = "rejected";
        },
        [fetchLocation.fulfilled]: (state, action) => {
            state.doneLoading = "fulfilled";
            state.latitude = action.payload.coords.latitude;
            state.longitude = action.payload.coords.longitude;
        },
    },
});