import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import makeRequest from './../fetchh';

export const VideoFetch = createAsyncThunk(
    "VideoSlice/VideoFetch",
    async(url, thunkAPI) => {
        let temp = await makeRequest(url);
        return temp.json();
    }
);

export const VideoSlice = createSlice({
    name: "VideoSlice",
    initialState: { videoData: [], doneLoading: "pending" },
    reducers: {},
    extraReducers: {
        [VideoFetch.pending]: (state, action) => {
            state.doneLoading = "pending"
        },
        [VideoFetch.rejected]: (state, action) => {
            state.doneLoading = "rejected";
        },
        [VideoFetch.fulfilled]: (state, action) => {
            state.doneLoading = "fulfilled"
            state.videoData.push(action.payload.video_data);
        },
    },
});