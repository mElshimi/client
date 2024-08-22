import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IFormData } from "../../../interfaces/interfaces";
import { toast } from "react-toastify";

const actAuthSignin = createAsyncThunk(
  "auth/actAuthSignin",
  async (formData: IFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/v1/users`,
        formData
      );
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

export default actAuthSignin;
