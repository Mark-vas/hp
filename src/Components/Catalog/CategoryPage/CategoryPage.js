import React from "react";
import style from "./CategoryPage.module.css";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../Store/Products/ProductsSlice";
import AddToBasketButton from "../../AddToBasketButton/AddToBasketButton";
import { likeToggle } from "../../../Store/Products/ProductsSlice";
import {
  productsFavouritesSelector,
  productsBasketSelector,
} from "../../../Store/Products/ProductsSelector";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CategoryPage = (props) => {
  // debugger;
  const dispatch = useDispatch();
  const requestProducts = async () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    requestProducts();
  }, []);

  const [show, mouseOnOff] = useState(false);

  // const basket = useSelector(productsBasketSelector);
  // let boolean = false;
  // basket.forEach((element) => {
  //   if (element.id == props.e.id) {
  //     return (boolean = true);
  //   }
  // });

  // const favouriteProducts = useSelector(productsFavouritesSelector);
  // let like = false;
  // if (favouriteProducts.length > 0) {
  //   favouriteProducts.forEach((element) => {
  //     if (element.id == props.e.id) {
  //       like = true;
  //     }
  //   });
  // }

  const clickLike = (e) => {
    let id = Number(e.currentTarget.parentElement.id);
    dispatch(likeToggle(id));
  };

  const likeOn = {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "#fc2847",
  };

  const likeOff = {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "gray",
  };

  const likeDontShow = {
    display: "none",
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

  return (
    <div className={style.category_page}>
      <div
        id={props.e.id}
        onMouseOver={() => mouseOnOff((show) => !show)}
        onMouseOut={() => mouseOnOff((show) => !show)}
        className={style.block_category_page_img}
      >
        {props.e.like ? (
          <FavoriteIcon
            style={show ? likeOn : likeDontShow}
            onClick={clickLike}
          />
        ) : (
          <FavoriteIcon
            style={show ? likeOff : likeDontShow}
            onClick={clickLike}
          />
        )}
        <p style={discount}>-{props.e.discountPercentage}%</p>
        <img src={props.e.images[0]} />
      </div>
      <div>
        <NavLink to={`/${props.e.category}/${props.e.id}`}>
          <h3 style={{ height: "50px" }}>{props.e.title}</h3>
        </NavLink>
        <p style={{ height: "100px" }}>{props.e.description}</p>
        <h3>${props.e.price}</h3>
        <Rating
          precision={0.5}
          name="read-only"
          size="small"
          value={props.e.rating}
          readOnly
        />
      </div>
      <div id={props.e.id}>
        <AddToBasketButton basket={props.e.basket} />
      </div>
    </div>
  );

  // return (
  //   <div className={style.category_page}>
  //     <div
  //       id={props.e.id}
  //       onMouseOver={() => mouseOnOff((show) => !show)}
  //       onMouseOut={() => mouseOnOff((show) => !show)}
  //       className={style.block_category_page_img}
  //     >
  //       {like ? (
  //         <FavoriteIcon
  //           style={show ? likeOn : likeDontShow}
  //           onClick={clickLike}
  //         />
  //       ) : (
  //         <FavoriteIcon
  //           style={show ? likeOff : likeDontShow}
  //           onClick={clickLike}
  //         />
  //       )}
  //       <p style={discount}>-{props.e.discountPercentage}%</p>
  //       <img src={props.e.thumbnail} />
  //     </div>
  //     <div>
  //       <NavLink to={`/${props.e.category}/${props.e.id}`}>
  //         <h3 style={{ height: "50px" }}>{props.e.title}</h3>
  //       </NavLink>
  //       <p style={{ height: "100px" }}>{props.e.description}</p>
  //       <h3>${props.e.price}</h3>
  //       <Rating
  //         precision={0.5}
  //         name="read-only"
  //         size="small"
  //         value={props.e.rating}
  //         readOnly
  //       />
  //     </div>
  //     <div id={props.e.id}>
  //       <AddToBasketButton basket={boolean} />
  //     </div>
  //   </div>
  // );
};

export default CategoryPage;
