import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Api/api";

const initialState = {
  fragrances: [],
};

export const getFragrances = createAsyncThunk(
  "products/getFragrances",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await api.fragrances();
    dispatch(setFragrances(res));
  }
);

export const FragrancesSlice = createSlice({
  name: "fragrances",
  initialState,
  reducers: {
    setFragrances: (state, action) => {
      state.fragrances = action.payload.products;
    },
  },
});

export const { setFragrances } = FragrancesSlice.actions;
export default FragrancesSlice.reducer;
