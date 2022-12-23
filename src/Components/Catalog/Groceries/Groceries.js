import React from "react";
import { groceriesSelector } from "../../../Store/Groceries/GroceriesSelector";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGroceries } from "../../../Store/Groceries/GroceriesSlice";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";

const Groceries = () => {
  const groceries = useSelector(groceriesSelector);
  const dispatch = useDispatch();
  const requestGroceries = async () => {
    dispatch(getGroceries());
  };
  useEffect(() => {
    requestGroceries();
  }, []);

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
        <div style={block_styles}>{imgsGroceries}</div>
      )}
    </>
  );
};
export default Groceries;
