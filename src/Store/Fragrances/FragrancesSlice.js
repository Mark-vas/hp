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
    // setFragrances: (state, action) => {
    //   state.fragrances = action.payload.products;
    //   state.fragrances.forEach((elem) => {
    //       debugger;
    //     elem.like == undefined ? (elem.like = false) : (elem.like = elem.like);
    //        elem.basket = false;
    //   });
    // },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(likeToggle, (state, action) => {
  //     debugger;
  //   });
  // },
  extraReducers: {
    // ["products/setLikeToggle"]: (state, action) => {
    //   state.fragrances.forEach((elem) => {
    //     if (elem.id == action.payload) {
    //       debugger;
    //       elem.like = !elem.like;
    //     }
    //   });
    //   debugger;
    // },
  },
});

export const { setFragrances } = FragrancesSlice.actions;
export default FragrancesSlice.reducer;
