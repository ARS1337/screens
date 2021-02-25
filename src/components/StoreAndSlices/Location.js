import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLocation = createAsyncThunk(
    "Location/fetchLocation",
    async (thunkAPI) => {
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
            console.log(state.doneLoading);
        },
        [fetchLocation.rejected]: (state, action) => {
            state.doneLoading = "rejected";
            console.log(state.doneLoading);
        },
        [fetchLocation.fulfilled]: (state, action) => {
            state.doneLoading = "fulfilled";
            console.log(state.doneLoading);
            state.latitude = action.payload.coords.latitude;
            state.longitude = action.payload.coords.longitude;
        },
    },
});