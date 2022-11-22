import React from "react";
import { fragrancesSelector } from "../../../Store/Fragrances/FragrancesSelector";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFragrances } from "../../../Store/Fragrances/FragrancesSlice";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";

const Fragrances = () => {
  const fragrances = useSelector(fragrancesSelector);
  const dispatch = useDispatch();
  const requestFragrances = async () => {
    dispatch(getFragrances());
  };
  useEffect(() => {
    requestFragrances();
  }, []);

  const imgsFragrances = fragrances?.map((e, index) => {
    return <CategoryPage key={index} e={e} />;
  });

  return (
    <>
      {fragrances.length == 0 ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <div>{imgsFragrances}</div>
      )}
    </>
  );
};
export default Fragrances;
