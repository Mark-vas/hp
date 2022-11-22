import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Api/api";

const initialState = {
  laptops: [],
};

export const getLaptops = createAsyncThunk(
  "products/getLaptops",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await api.laptops();
    dispatch(setLaptops(res));
  }
);

export const LaptopsSlice = createSlice({
  name: "laptops",
  initialState,
  reducers: {
    setLaptops: (state, action) => {
      state.laptops = action.payload.products;
    },
  },
});

export const { setLaptops } = LaptopsSlice.actions;
export default LaptopsSlice.reducer;
