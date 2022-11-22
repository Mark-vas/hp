import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Api/api";

const initialState = {
  skincare: [],
};

export const getSkincare = createAsyncThunk(
  "products/getSkincare",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await api.skincare();
    dispatch(setSkincare(res));
  }
);

export const SkincareSlice = createSlice({
  name: "skincare",
  initialState,
  reducers: {
    setSkincare: (state, action) => {
      state.skincare = action.payload.products;
    },
  },
});

export const { setSkincare } = SkincareSlice.actions;
export default SkincareSlice.reducer;
