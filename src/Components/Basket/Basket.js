import React from "react";
import { productsBasketSelector } from "../../Store/Products/ProductsSelector";
import { useSelector } from "react-redux";

const Basket = () => {
  const basket = useSelector(productsBasketSelector);
  //   console.log(basket);
  return <>Basket</>;
};

export default Basket;
