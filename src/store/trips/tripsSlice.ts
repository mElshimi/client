import { createSlice } from "@reduxjs/toolkit";
import { ITrips } from "../../interfaces/interfaces";
import actGetTripsByCategory from "./act/actGetTripsByCategory";
import actGetTrips from "./act/actGetTrips";

const initialState: ITrips = {
  records: [],
  loading: "idle",
  error: null,
};

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    categoryCleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actGetTrips.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetTrips.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.records = action.payload;
      })
      .addCase(actGetTrips.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string") {
          state.error = action.payload;
        }
      })
      .addCase(actGetTripsByCategory.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetTripsByCategory.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.records = action.payload;
      })
      .addCase(actGetTripsByCategory.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
  },
});

export const { categoryCleanUp } = tripsSlice.actions;
export { actGetTripsByCategory, actGetTrips };
export default tripsSlice.reducer;
