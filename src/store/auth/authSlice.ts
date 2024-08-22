import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../interfaces/interfaces";
import actAuthSignup from "./act/actAuthSignup";
import actAuthSignin from "./act/actAuthSignin";

const initialState: IAuthState = {
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // signup
      .addCase(actAuthSignup.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actAuthSignup.fulfilled, (state) => {
        state.loading = "succeeded";
        // state.records = action.payload;
      })
      .addCase(actAuthSignup.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string") {
          state.error = action.payload;
        }
      })
      // signin
      .addCase(actAuthSignin.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actAuthSignin.fulfilled, (state) => {
        state.loading = "succeeded";
        // state.records = action.payload;
      })
      .addCase(actAuthSignin.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
  },
});

export { actAuthSignup, actAuthSignin };
export default authSlice.reducer;
