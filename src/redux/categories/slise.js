import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./operation";

const slice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    currentCategory: "",
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);

        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default slice.reducer;
