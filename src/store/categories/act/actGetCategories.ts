import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { ICategory } from "../../../interfaces/interfaces";

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get<ICategory[]>(`/categories`);
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

export default actGetCategories;
