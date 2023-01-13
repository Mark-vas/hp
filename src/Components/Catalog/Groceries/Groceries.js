import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";
import { productsSelector } from "../../../Store/Products/ProductsSelector";
import { getProducts } from "../../../Store/Products/ProductsSlice";

const Groceries = () => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();
  const requestProducts = async () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    requestProducts();
  }, []);

  const groceries = products?.filter((elem) => {
    return elem.category == "groceries";
  });

  const imgsGroceries = groceries?.map((e, index) => {
    return <CategoryPage key={index} e={e} />;
  });

  const block_styles = {
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "start",
    maxWidth: "1440px",
  };

  return (
    <>
      {groceries.length == 0 ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <>
          <h1>Groceries</h1>
          <div style={block_styles}>{imgsGroceries}</div>
        </>
      )}
    </>
  );
};
export default Groceries;
