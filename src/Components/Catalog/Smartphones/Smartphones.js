import React from "react";
import { smartphonesSelector } from "../../../Store/Smartphones/SmartphonesSelector";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSmartphones } from "../../../Store/Smartphones/SmartphonesSlice";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";

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

  return (
    <>
      {smartphones.length == 0 ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <div>{imgsSmartphones}</div>
      )}
    </>
  );
};
export default Smartphones;
