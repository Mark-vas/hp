import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";
import { productsSelector } from "../../../Store/Products/ProductsSelector";
import { getProducts } from "../../../Store/Products/ProductsSlice";

const HomeDecoration = () => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();
  const requestProducts = async () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    requestProducts();
  }, []);

  const homeDecoration = products?.filter((elem) => {
    return elem.category == "home-decoration";
  });

  const imgsHomeDecoration = homeDecoration?.map((e, index) => {
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
      {homeDecoration.length == 0 ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <>
          <h1>HomeDecoration</h1>
          <div style={block_styles}>{imgsHomeDecoration}</div>
        </>
      )}
    </>
  );
};
export default HomeDecoration;
