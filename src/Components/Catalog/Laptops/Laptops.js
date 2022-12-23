import React from "react";
import { laptopsSelector } from "../../../Store/Laptops/LaptopsSelector";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLaptops } from "../../../Store/Laptops/LaptopsSlice";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";
import { productsBasketSelector } from "../../../Store/Products/ProductsSelector";

const Laptops = () => {
  const laptops = useSelector(laptopsSelector);
  const dispatch = useDispatch();
  const requestLaptops = async () => {
    dispatch(getLaptops());
  };
  useEffect(() => {
    requestLaptops();
  }, []);

  const imgsLaptops = laptops?.map((e, index) => {
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
      {laptops.length == 0 ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <div style={block_styles}>{imgsLaptops}</div>
      )}
    </>
  );
};
export default Laptops;
