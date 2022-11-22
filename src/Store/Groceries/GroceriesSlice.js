import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Api/api";

const initialState = {
  groceries: [],
};

export const getGroceries = createAsyncThunk(
  "products/getGroceries",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await api.groceries();
    dispatch(setGroceries(res));
  }
);

export const GroceriesSlice = createSlice({
  name: "groceries",
  initialState,
  reducers: {
    setGroceries: (state, action) => {
      state.groceries = action.payload.products;
    },
  },
});

export const { setGroceries } = GroceriesSlice.actions;
export default GroceriesSlice.reducer;
