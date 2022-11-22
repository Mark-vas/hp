import React from "react";
import { productsFavouritesSelector } from "../../Store/Products/ProductsSelector";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector(productsFavouritesSelector);
  console.log(favourites);
  return <>Favourites</>;
};

export default Favourites;
