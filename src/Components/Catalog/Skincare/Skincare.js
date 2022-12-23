import React from "react";
import { skincareSelector } from "../../../Store/Skincare/SkincareSelector";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSkincare } from "../../../Store/Skincare/SkincareSlice";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";
import { productsBasketSelector } from "../../../Store/Products/ProductsSelector";

const Skincare = () => {
  const skincare = useSelector(skincareSelector);
  const dispatch = useDispatch();
  const requestSkincare = async () => {
    dispatch(getSkincare());
  };
  useEffect(() => {
    requestSkincare();
  }, []);

  const imgsSkincare = skincare?.map((e, index) => {
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
      {skincare.length == 0 ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <div style={block_styles}>{imgsSkincare}</div>
      )}
    </>
  );
};
export default Skincare;
