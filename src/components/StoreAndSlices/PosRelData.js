import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosRelData = createAsyncThunk(
  "otherSlice/fetchPosRelData",
  async (data, thunkAPI) => {
    let temp = await fetch(data[0], data[1]);
    return temp.json();
  }
);

export const otherSlice = createSlice({
  name: "otherSlice",
  initialState: {
    hotelsNearby: [],
    recommended: [],
    topPicks: [],
    nearbyKitchens: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchPosRelData.pending]: (state, action) => {},
    [fetchPosRelData.rejected]: (state, action) => {
      console.log("posreldata rejected");
    },
    [fetchPosRelData.fulfilled]: (state, action) => {
      console.log("posreldata fulfillef");
      if (action.payload.success == 1) {
         console.log("call succedded for "+action.meta.arg[2]);
        if ([action.meta.arg[2]] == "hotelsNearby") {
          state[[action.meta.arg[2]]] = action.payload.near_by_hotels;
          state.nearbyKitchens = 1;
        } else if ([action.meta.arg[2]] == "topPicks") {
          state[[action.meta.arg[2]]] = action.payload.data;
        } else if ([action.meta.arg[2]] == "recommended") {
          state[[action.meta.arg[2]]] = action.payload.recommended_arr;
        }
      } else {
        if ([action.meta.arg[2]] == "hotelsNearby") {
          state.nearbyKitchens = 0;
          console.log("call failed for "+action.meta.arg[2]);
          alert(action.payload.message);
        }
      }
    },
  },
});
