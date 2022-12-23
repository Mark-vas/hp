import React from "react";
import { fragrancesSelector } from "../../../Store/Fragrances/FragrancesSelector";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFragrances } from "../../../Store/Fragrances/FragrancesSlice";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";
import { productsSelector } from "../../../Store/Products/ProductsSelector";
import { getProducts } from "../../../Store/Products/ProductsSlice";

const Fragrances = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const requestProducts = async () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    requestProducts();
  }, []);

  const fragrances = products?.filter((elem) => {
    return elem.category == "fragrances";
  });
  // const fragrances = useSelector(fragrancesSelector);
  // const dispatch = useDispatch();
  // const requestFragrances = async () => {
  //   dispatch(getFragrances());
  // };
  // useEffect(() => {
  //   requestFragrances();
  // }, []);

  const imgsFragrances = fragrances?.map((e, index) => {
    debugger;
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
        <div style={block_styles}>{imgsFragrances}</div>
      )}
    </>
  );
};
export default Fragrances;
