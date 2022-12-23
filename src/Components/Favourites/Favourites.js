import React from "react";
import {
  productsFavouritesSelector,
  productsBasketSelector,
} from "../../Store/Products/ProductsSelector";
import { useSelector } from "react-redux";
import style from "./Favourites.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { likeToggle } from "../../Store/Products/ProductsSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Rating from "@mui/material/Rating";
import AddToBasketButton from "../AddToBasketButton/AddToBasketButton";

const Favourites = () => {
  const basket = useSelector(productsBasketSelector);
  const dispatch = useDispatch();
  const favourites = useSelector(productsFavouritesSelector);

  const clickLike = (e) => {
    dispatch(likeToggle(Number(e.currentTarget.parentElement.id)));
  };

  const likeOn = {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "#fc2847",
  };

  const discount = {
    position: "absolute",
    borderRadius: "5px",
    backgroundColor: "red",
    padding: "1px",
    color: "white",
    bottom: "10px",
    left: "10px",
    margin: 0,
  };

  const blockFavoriteProducts = favourites?.map((elem, index) => {
    debugger;
    let boolean = false;
    basket.forEach((element) => {
      if (element.id == elem.id) {
        boolean = true;
      }
    });
    return (
      <div className={style.block_product} key={index} id={elem.id}>
        <div className={style.block_product_img} id={elem.id}>
          <FavoriteIcon onClick={clickLike} style={likeOn}></FavoriteIcon>
          <p style={discount}>-{elem.discountPercentage}%</p>
          <img src={elem.images[0]} />
        </div>
        <div>
          <NavLink>
            <h3 style={{ height: "50px" }}>{elem.title}</h3>
          </NavLink>
          <p style={{ height: "100px" }}>{elem.description}</p>
          <h3>${elem.price}</h3>
          <Rating
            precision={0.5}
            name="read-only"
            size="small"
            value={elem.rating}
            readOnly
          />
        </div>
        <div id={elem.id}>
          <AddToBasketButton basket={boolean} />
        </div>
      </div>
    );
  });

  return (
    <>
      <h1>Favorite</h1>
      <div className={style.block_Favorite}>{blockFavoriteProducts}</div>
    </>
  );
};

export default Favourites;
