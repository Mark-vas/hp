import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Api/api";

const initialState = {
  homeDecoration: [],
};

export const getHomeDecoration = createAsyncThunk(
  "products/getHomeDecoration",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await api.homeDecoration();
    dispatch(setHomeDecoration(res));
  }
);

export const HomeDecorationSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setHomeDecoration: (state, action) => {
      state.homeDecoration = action.payload.products;
    },
  },
});

export const { setHomeDecoration } = HomeDecorationSlice.actions;
export default HomeDecorationSlice.reducer;
