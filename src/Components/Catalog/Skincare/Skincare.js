import React from "react";
import { skincareSelector } from "../../../Store/Skincare/SkincareSelector";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSkincare } from "../../../Store/Skincare/SkincareSlice";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";

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

  return (
    <>
      {skincare.length == 0 ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <div>{imgsSkincare}</div>
      )}
    </>
  );
};
export default Skincare;
