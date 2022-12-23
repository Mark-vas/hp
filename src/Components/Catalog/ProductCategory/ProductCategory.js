import React from "react";
import "./ProductCategory.css";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { likeToggle } from "../../../Store/Products/ProductsSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import AddToBasketButton from "../../AddToBasketButton/AddToBasketButton";

const ProductCategory = (props) => {
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

  const discount = {
    position: "absolute",
    borderRadius: "5px",
    backgroundColor: "red",
    padding: "1px",
    color: "white",
    bottom: "167px",
    left: "16px",
  };

  const clickLike = (e) => {
    dispatch(likeToggle(Number(e.currentTarget.parentElement.id)));
  };

  return (
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
      <p style={discount}>-{props.product.discountPercentage}%</p>
      <img className="productImg" src={props.product.images[0]} />
      <h2 className="productInf" style={{ fontWeight: "bold" }}>
        ${props.product.price}
      </h2>
      <NavLink to={`/${props.product.category}/${props.product.id}`}>
        <h3 className="productInf">{props.product.title}</h3>
      </NavLink>
      <Rating
        style={{ paddingLeft: "6px" }}
        precision={0.1}
        name="read-only"
        size="small"
        value={props.product.rating}
        readOnly
      />
      <AddToBasketButton basket={props.product.basket} />
    </div>
  );
};

export default ProductCategory;
