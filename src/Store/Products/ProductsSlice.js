import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Api/api";

const initialState = {
  products: [],
  // likeProducts: [],
  // productsBasket: [],
  // productPageInf: {},
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

// export const getProductPage = createAsyncThunk(
//   "products/getProductPage",
//   async (id, { rejectWithValue, dispatch }) => {
//     const res = await api.productPage(id);
//     dispatch(setProductPage(res));
//   }
// );

export const getDelElemFromBasket = createAsyncThunk(
  "products/getProductPage",
  (id, { rejectWithValue, dispatch }) => {
    dispatch(setDelElemFromBasket(id));
  }
);

export const plusElemInTheBasket = createAsyncThunk(
  "products/getProductPage",
  (id, { rejectWithValue, dispatch }) => {
    dispatch(setPlusElemInTheBasket(id));
  }
);

export const minusElemInTheBasket = createAsyncThunk(
  "products/getProductPage",
  (id, { rejectWithValue, dispatch }) => {
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
    // setProductPage: (state, action) => {
    //   state.productPageInf = action.payload;
    // },
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

export const {
  setDelElemFromBasket,
  setAllProducts,
  setLikeToggle,
  setAddToBasket,
  // setProductPage,
  setPlusElemInTheBasket,
  setMinusElemInTheBasket,
} = ProductsSlice.actions;
export default ProductsSlice.reducer;
