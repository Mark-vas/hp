import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";
import { productsSelector } from "../../../Store/Products/ProductsSelector";
import { getProducts } from "../../../Store/Products/ProductsSlice";

const Fragrances = () => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();
  const requestProducts = async () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    requestProducts();
  }, []);

  const fragrances = products?.filter((elem) => {
    return elem.category == "fragrances";
  });

  const imgsFragrances = fragrances?.map((e, index) => {
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
      {fragrances.length == 0 ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <>
          <h1>Fragrances</h1>
          <div style={block_styles}>{imgsFragrances}</div>
        </>
      )}
    </>
  );
};
export default Fragrances;
