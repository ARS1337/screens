import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchToken = createAsyncThunk(
    "tokenSlice/fetchToken",
    async(data, thunkAPI) => {
        let temp = await fetch(data[0], data[1]);
        console.log("thunk....");
        return temp.json();
    }
);

export const tokenSlice = createSlice({
    name: "tokenSlice",
    initialState: { token: "" },
    reducers: {
        clearToken: (state, action) => {
            state.token = "";
        },
    },
    extraReducers: {
        [fetchToken.pending]: (state, action) => {},
        [fetchToken.rejected]: (state, action) => {
            console.log("rejected");
        },
        [fetchToken.fulfilled]: (state, action) => {
            console.log("login fulfilled");
            console.log(action);
            state.token = action.payload.data[0].token;
        },
    },
});
export const { clearToken } = tokenSlice.actions;