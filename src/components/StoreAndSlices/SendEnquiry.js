import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const SendEnquiry = createAsyncThunk(
    "EnquirySlice/SendEnquiry",
    async(data, thunkAPI) => {
        let temp = await fetch(data[0], data[1]);
        return temp.json();
    }
);

export const EnquirySlice = createSlice({
    name: "EnquirySlice",
    initialState: {
        enquiry_desc: "",
        wanna_pay: "",
        user_count: "",
        delivery_on: "",
        serving_type: ""
    },
    reducers: {
        setEnquiryDetails: (state, action) => {
            state[action.payload.key] = action.payload.value;
        },
    },
    extraReducers: {
        [SendEnquiry.pending]: (state, action) => {},
        [SendEnquiry.rejected]: (state, action) => {
            console.log("sendEnquiry failed");
        },
        [SendEnquiry.fulfilled]: (state, action) => {
            console.log(action.payload);
            if (
                action.payload.success == "0" &&
                action.payload.message == "Authentication failed"
            ) {
                alert("Please Login To Continue");
            } else {
                alert(action.payload.message);
            }
        },
    },
});

export const { setEnquiryDetails } = EnquirySlice.actions;