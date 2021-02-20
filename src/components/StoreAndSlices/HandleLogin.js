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
    initialState: {
        token: "",
        loginId: "",
        password: "",
        displayContainer: { "display": "none" },
    },
    reducers: {
        clearToken: (state, action) => {
            state.token = "";
        },
        setDetails: (state, action) => {
            state[action.payload.key] = action.payload.value;
        },
        clearDetails: (state, action) => {
            state.loginId = "";
            state.password = "";
        },
        displayContainerVisible: (state, action) => {
            state.displayContainer.display = "block"
        },
        displayContainerInVisible: (state, action) => {
            state.displayContainer.diplay = "none"
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
    setDetails,
    clearDetails,
    displayContainerInVisible,
    displayContainerVisible,
} = tokenSlice.actions;