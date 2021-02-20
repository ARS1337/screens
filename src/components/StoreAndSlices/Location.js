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
    initialState: { latitude: "", longitude: "" },
    reducers: {},
    extraReducers: {
        [fetchLocation.pending]: (state, action) => {},
        [fetchLocation.rejected]: (state, action) => {
            console.log("rejected");
        },
        [fetchLocation.fulfilled]: (state, action) => {
            console.log("fulfilled");
            console.log(action);
            state.latitude = action.payload.coords.latitude;
            state.longitude = action.payload.coords.longitude;
        },
    },
});