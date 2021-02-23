import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import makeRequest from './../fetchh';

export const fetchToken = createAsyncThunk(
    "tokenSlice/fetchToken",
    async(data, thunkAPI) => {
        let temp = await makeRequest(data[0], data[1], data[2])
        return temp.json();
    }
);

export const tokenSlice = createSlice({
    name: "tokenSlice",
    initialState: {
        token: "",
        doneLoading: "fulfilled",
        message: ""
    },
    reducers: {
        clearToken: (state, action) => {
            state.token = "";
        },
    },
    extraReducers: {
        [fetchToken.pending]: (state, action) => {
            state.doneLoading = "pending";
        },
        [fetchToken.rejected]: (state, action) => {
            state.doneLoading = "rejected";
            state.message = action.payload.message;
        },
        [fetchToken.fulfilled]: (state, action) => {
            state.doneLoading = "fulfilled";
            state.message = action.payload.message;
            if (action.payload.success == "1") {
                state.token = action.payload.data[0].token;
            } else {
                alert(action.payload.message);
            }
        },
    },
});
export const {
    clearToken,
} = tokenSlice.actions;