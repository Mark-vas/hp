import React from "react";
import { laptopsSelector } from "../../../Store/Laptops/LaptopsSelector";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLaptops } from "../../../Store/Laptops/LaptopsSlice";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";

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

  return (
    <>
      {laptops.length == 0 ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <div>{imgsLaptops}</div>
      )}
    </>
  );
};
export default Laptops;
