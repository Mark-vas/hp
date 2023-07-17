import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Products from "./Components/Catalog/Products";
import Header from "./Components/Header/Header";
import Smartphones from "./Components/Catalog/Smartphones/Smartphones";
import Laptops from "./Components/Catalog/Laptops/Laptops";
import Fragrances from "./Components/Catalog/Fragrances/Fragrances";
import Skincare from "./Components/Catalog/Skincare/Skincare";
import Groceries from "./Components/Catalog/Groceries/Groceries";
import HomeDecoration from "./Components/Catalog/HomeDecoration/HomeDecoration";
import Basket from "./Components/Basket/Basket";
import Favourites from "./Components/Favourites/Favourites";
import ProductPage from "./Components/ProductPage/ProductPage";
import Auth from "./Components/Authorization/Authorization";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header display={window.location.pathname} />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/smartphones/:id" element={<ProductPage />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/laptops/:id" element={<ProductPage />} />
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/fragrances/:id" element={<ProductPage />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/skincare/:id" element={<ProductPage />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/groceries/:id" element={<ProductPage />} />
          <Route path="/home-decoration" element={<HomeDecoration />} />
          <Route path="/home-decoration/:id" element={<ProductPage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
