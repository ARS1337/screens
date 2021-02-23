import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import makeRequest from './../fetchh';

export const SendEnquiry = createAsyncThunk(
    "EnquirySlice/SendEnquiry",
    async(data, thunkAPI) => {
        let temp = await makeRequest(data[0], data[1], data[2]);
        return temp.json();
    }
);

export const EnquirySlice = createSlice({
    name: "EnquirySlice",
    initialState: {
        doneLoading: "fulfilled",
        message: ""
    },
    reducers: {
        setEnquiryDetails: (state, action) => {
            state[action.payload.key] = action.payload.value;
        },
    },
    extraReducers: {
        [SendEnquiry.pending]: (state, action) => {
            state.doneLoading = "pending";
        },
        [SendEnquiry.rejected]: (state, action) => {
            state.message = action.payload.message;
            state.doneLoading = "rejected";
        },
        [SendEnquiry.fulfilled]: (state, action) => {
            state.doneLoading = "fulfilled";
            state.message = action.payload.message;
            if (
                action.payload.success == "0" &&
                action.payload.message == "Authentication failed"
            ) {
                state.message = "Please Login To Continue";
            } else {
                state.message = action.payload.message;
            }
        },
    },
});

export const { setEnquiryDetails } = EnquirySlice.actions;