import { configureStore } from "@reduxjs/toolkit";
import LaptopsSlice from "./Laptops/LaptopsSlice";
import ProductsSlice from "./Products/ProductsSlice";
import SmartphonesSlice from "./Smartphones/SmartphonesSlice";
import FragrancesSlice from "./Fragrances/FragrancesSlice";
import SkincareSlice from "./Skincare/SkincareSlice";
import GroceriesSlice from "./Groceries/GroceriesSlice";
import HomeDecorationSlice from "./HomeDecoration/HomeDecorationSlice";

export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    smartphones: SmartphonesSlice,
    laptops: LaptopsSlice,
    fragrances: FragrancesSlice,
    skincare: SkincareSlice,
    groceries: GroceriesSlice,
    homeDecoration: HomeDecorationSlice,
  },
});
