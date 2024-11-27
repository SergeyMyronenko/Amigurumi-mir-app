import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://amigurumi-mir-api.onrender.com";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/api/categories");
      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addCategoryName = createAsyncThunk(
  "categories/addCategoryName",
  async (newCategory, thunkApi) => {
    try {
      const response = await axios.post("/api/categories", newCategory);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
