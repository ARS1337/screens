import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const VideoFetch = createAsyncThunk(
    "VideoSlice/VideoFetch",
    async(data, thunkAPI) => {
        let temp = await fetch(data[0], data[1]);
        return temp.json();
    }
);

export const VideoSlice = createSlice({
    name: "VideoSlice",
    initialState: { videoData: [] },
    reducers: {},
    extraReducers: {
        [VideoFetch.pending]: (state, action) => {},
        [VideoFetch.rejected]: (state, action) => {
            console.log("video rejected");
        },
        [VideoFetch.fulfilled]: (state, action) => {
            console.log(action);
            state.videoData.push(action.payload.video_data);
        },
    },
});