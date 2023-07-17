import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Api/api";

const initialState = {
  products: [],
  error: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  // _ - сюда можно что-то передать, например при удалении или добавлении
  async (_, { dispatch }) => {
    const res = await api.products();
    dispatch(setAllProducts(res));
  }
);

export const likeToggle = createAsyncThunk(
  "products/likeToggle",
  (id, { dispatch }) => {
    dispatch(setLikeToggle(id));
  }
);

export const getAddToBasket = createAsyncThunk(
  "products/getAddToBasket",
  (id, { dispatch }) => {
    dispatch(setAddToBasket(id));
  }
);

export const getDelElemFromBasket = createAsyncThunk(
  "products/getProductPage",
  (id, { dispatch }) => {
    dispatch(setDelElemFromBasket(id));
  }
);

export const plusElemInTheBasket = createAsyncThunk(
  "products/getProductPage",
  (id, { dispatch }) => {
    dispatch(setPlusElemInTheBasket(id));
  }
);

export const minusElemInTheBasket = createAsyncThunk(
  "products/getProductPage",
  (id, { dispatch }) => {
    dispatch(setMinusElemInTheBasket(id));
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
          state.products[i].totalElemInBasket = 0;
        }
      }
    },
    setLikeToggle: (state, action) => {
      state.products.forEach((elem) => {
        if (elem.id == action.payload) {
          elem.like = !elem.like;
        }
        return state.products;
      });
    },
    setAddToBasket: (state, action) => {
      state.products.forEach((elem) => {
        if (elem.id == action.payload) {
          elem.basket = !elem.basket;
          elem.totalElemInBasket == 0
            ? (elem.totalElemInBasket = elem.totalElemInBasket + 1)
            : (elem.totalElemInBasket = 0);
        }
        return state.products;
      });
    },
    setDelElemFromBasket: (state, action) => {
      state.products.forEach((elem) => {
        if (elem.id == action.payload) {
          elem.basket = !elem.basket;
          elem.totalElemInBasket = 0;
        }
        return state.products;
      });
    },
    setPlusElemInTheBasket: (state, action) => {
      state.products.forEach((elem) => {
        if (elem.id == action.payload) {
          elem.totalElemInBasket = elem.totalElemInBasket + 1;
        }
        return state.products;
      });
    },
    setMinusElemInTheBasket: (state, action) => {
      state.products.forEach((elem) => {
        if (elem.id == action.payload) {
          elem.totalElemInBasket = elem.totalElemInBasket - 1;
        }
        return state.products;
      });
    },
    setCountLimit: (state, action) => {
      state.limit = action.payload;
      return state.limit;
    },
  },
  extraReducers: {
    [getProducts.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const {
  setDelElemFromBasket,
  setAllProducts,
  setLikeToggle,
  setAddToBasket,
  setPlusElemInTheBasket,
  setMinusElemInTheBasket,
  setCountLimit,
} = ProductsSlice.actions;
export default ProductsSlice.reducer;
