import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { ITrip } from "../../../interfaces/interfaces";

const actGetTripsByCategory = createAsyncThunk(
  "trips/actGetTripsByCategory",
  async (category: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get<ITrip[]>(`/trips?category=${category}`);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          toast.error(error.response?.data.message || error.message)
        );
      } else {
        return rejectWithValue(toast.error("An unexpected error"));
      }
    }
  }
);

export default actGetTripsByCategory;
