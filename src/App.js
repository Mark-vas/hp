import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/home-decoration" element={<HomeDecoration />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
