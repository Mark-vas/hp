import React from "react";
import style from "./CategoryPage.module.css";
import Rating from "@mui/material/Rating";

const CategoryPage = (props) => {
  return (
    <div className={style.CategoryPage}>
      <div>
        <img src={props.e.thumbnail} />
      </div>
      <div>
        <h3>{props.e.title}</h3>
        <p>{props.e.description}</p>
        <p>{props.e.brand}</p>
        <Rating
          style={{ paddingLeft: "6px" }}
          precision={0.5}
          name="read-only"
          size="small"
          value={props.e.rating}
          readOnly
        />
        <p>{props.e.price}$</p>
      </div>
    </div>
  );
};

export default CategoryPage;
