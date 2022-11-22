import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Api/api";

const initialState = {
  products: [],
  likeProducts: [],
  productsBasket: [],
  error: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  // _ - сюда можно что-то передать, например при удалении или добавлении
  async (_, { rejectWithValue, dispatch }) => {
    const res = await api.products();
    dispatch(setAllProducts(res));
  }
);

export const likeToggle = createAsyncThunk(
  "products/likeToggle",
  (id, { rejectWithValue, dispatch }) => {
    dispatch(setLikeToggle(id));
  }
);

export const getAddToBasket = createAsyncThunk(
  "products/getAddToBasket",
  (id, { rejectWithValue, dispatch }) => {
    dispatch(setAddToBasket(id));
  }
);

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      if (state.products.length == 0) {
        state.products = action.payload.products;
        for (let i = 0; i < state.products.length; i++) {
          state.products[i].like = false;
          state.products[i].basket = false;
        }
      }
    },
    setLikeToggle: (state, action) => {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id == action.payload) {
          state.products[i].like = !state.products[i].like;
          if (state.likeProducts.some((e) => e.id == state.products[i].id)) {
            let arr = state.likeProducts.filter((e) => {
              return e.id !== state.products[i].id;
            });
            state.likeProducts = arr;
          } else {
            state.likeProducts = [...state.likeProducts, state.products[i]];
          }
        }
      }
    },
    setAddToBasket: (state, action) => {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id == action.payload) {
          state.products[i].basket = !state.products[i].basket;
          if (state.productsBasket.some((e) => e.id == state.products[i].id)) {
            let arr = state.productsBasket.filter((e) => {
              return e.id !== state.products[i].id;
            });
            state.productsBasket = arr;
          } else {
            state.productsBasket = [...state.productsBasket, state.products[i]];
          }
        }
      }
    },
  },
  extraReducers: {
    // Может потребоваться в случае необходимости обновления объекта, относящегося к другим Slice.
    // fulfilled - все ОК
    // pending - загрузка
    // rejected - ошибка
    [getProducts.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const { setAllProducts, setLikeToggle, setAddToBasket } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
