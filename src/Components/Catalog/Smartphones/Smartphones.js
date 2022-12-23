import React from "react";
import { smartphonesSelector } from "../../../Store/Smartphones/SmartphonesSelector";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSmartphones } from "../../../Store/Smartphones/SmartphonesSlice";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";
import { productsBasketSelector } from "../../../Store/Products/ProductsSelector";

const Smartphones = () => {
  const smartphones = useSelector(smartphonesSelector);
  const dispatch = useDispatch();
  const requestSmartphones = async () => {
    dispatch(getSmartphones());
  };
  useEffect(() => {
    requestSmartphones();
  }, []);

  const imgsSmartphones = smartphones?.map((e, index) => {
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
      {smartphones.length == 0 ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <div style={block_styles}>{imgsSmartphones}</div>
      )}
    </>
  );
};
export default Smartphones;
