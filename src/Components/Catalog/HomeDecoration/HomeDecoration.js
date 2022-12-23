import React from "react";
import { homeDecorationSelector } from "../../../Store/HomeDecoration/HomeDecorationSelector";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHomeDecoration } from "../../../Store/HomeDecoration/HomeDecorationSlice";
import CircularProgress from "@mui/material/CircularProgress";
import CategoryPage from "../CategoryPage/CategoryPage";

const HomeDecoration = () => {
  const homeDecoration = useSelector(homeDecorationSelector);
  const dispatch = useDispatch();
  const requestHomeDecoration = async () => {
    dispatch(getHomeDecoration());
  };
  useEffect(() => {
    requestHomeDecoration();
  }, []);

  const imgsHomeDecoration = homeDecoration?.map((e, index) => {
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
      {homeDecoration.length == 0 ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
      ) : (
        <div style={block_styles}>{imgsHomeDecoration}</div>
      )}
    </>
  );
};
export default HomeDecoration;
