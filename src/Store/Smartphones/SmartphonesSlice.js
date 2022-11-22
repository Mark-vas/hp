import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Api/api";

const initialState = {
  smartphones: [],
};

export const getSmartphones = createAsyncThunk(
  "products/getSmartphones",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await api.smartphones();
    dispatch(setSmartphones(res));
  }
);

export const SmartphonesSlice = createSlice({
  name: "smartphones",
  initialState,
  reducers: {
    setSmartphones: (state, action) => {
      state.smartphones = action.payload.products;
    },
  },
});

export const { setSmartphones } = SmartphonesSlice.actions;
export default SmartphonesSlice.reducer;
