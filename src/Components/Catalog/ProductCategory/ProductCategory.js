import React from "react";
import "./ProductCategory.css";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  likeToggle,
  getAddToBasket,
} from "../../../Store/Products/ProductsSlice";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

const ProductCategory = (props) => {
  // debugger;
  const dispatch = useDispatch();
  const [show, mouseOnOff] = useState(false);

  const likeShow = {
    position: "absolute",
    top: "10px",
    right: "20px",
    color: "gray",
  };
  const likeDontShow = {
    display: "none",
  };

  const likeOn = {
    position: "absolute",
    top: "10px",
    right: "20px",
    color: "#fc2847",
  };

  const clickLike = (e) => {
    dispatch(likeToggle(e.currentTarget.parentElement.id));
  };

  const addToBasket = (e) => {
    dispatch(getAddToBasket(e.currentTarget.parentElement.id));
  };

  return (
    <div>
      <div
        id={props.product.id}
        onMouseOver={() => mouseOnOff((show) => !show)}
        onMouseOut={() => mouseOnOff((show) => !show)}
      >
        {props.product.like ? (
          <FavoriteIcon
            onClick={clickLike}
            style={show ? likeOn : likeDontShow}
          ></FavoriteIcon>
        ) : (
          <FavoriteIcon
            onClick={clickLike}
            style={show ? likeShow : likeDontShow}
          ></FavoriteIcon>
        )}
        <img className="productImg" src={props.product.thumbnail} />
        <p className="productInf" style={{ fontWeight: "bold" }}>
          {props.product.price}$
        </p>
        <p className="productInf">{props.product.title}</p>
        <Rating
          style={{ paddingLeft: "6px" }}
          precision={0.5}
          name="read-only"
          size="small"
          value={props.product.rating}
          readOnly
        />
        {props.product.basket ? (
          <Button
            onClick={addToBasket}
            variant="contained"
            color="success"
            style={{
              fontWeight: "bold",
              display: "block",
              margin: "5px auto",
              width: "95%",
              height: "25px",
              padding: "0px 16px",
            }}
          >
            in the basket
          </Button>
        ) : (
          <Button
            onClick={addToBasket}
            variant="contained"
            style={{
              backgroundColor: "rgb(0,141,210)",
              fontWeight: "bold",
              display: "block",
              margin: "5px auto",
              width: "95%",
              height: "25px",
              padding: "0px 16px",
            }}
          >
            into a basket
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
