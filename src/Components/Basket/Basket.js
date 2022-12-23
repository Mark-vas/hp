import React from "react";
import {
  productsBasketSelector,
  productsFavouritesSelector,
} from "../../Store/Products/ProductsSelector";
import { useSelector } from "react-redux";
import style from "./Basket.module.css";
import { NavLink } from "react-router-dom";
import {
  likeToggle,
  getDelElemFromBasket,
} from "../../Store/Products/ProductsSlice";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";

const Basket = () => {
  const favorite = useSelector(productsFavouritesSelector);

  const dispatch = useDispatch();
  const clickLike = (e) => {
    dispatch(likeToggle(Number(e.currentTarget.parentElement.id)));
  };

  const likeShow = {
    color: "red",
  };
  const likeDontShow = {
    color: "gray",
  };

  const basket = useSelector(productsBasketSelector);
  const basketBlock = basket?.map((elem, index) => {
    let like = false;
    favorite.forEach((element) => {
      if (element.id == elem.id) {
        like = true;
      }
    });

    const clickDel = (e) => {
      dispatch(getDelElemFromBasket(Number(e.currentTarget.parentElement.id)));
    };
    return (
      <div key={index}>
        <div className={style.product}>
          <div>
            <img className={style.image} src={elem.images[0]} />
          </div>
          <div className={style.description}>
            <div>
              <NavLink to={`/${elem.category}/${elem.id}`}>
                <h3>{elem.title}</h3>
              </NavLink>
              <p>{elem.description}</p>
              <p>Brand: {elem.brand}</p>
              <div>
                {like ? (
                  <div
                    id={elem.id}
                    style={{
                      position: "relative",
                    }}
                  >
                    <button
                      onClick={clickLike}
                      style={{ border: "none", backgroundColor: "transparent" }}
                    >
                      <FavoriteIcon style={likeShow} />
                      <span style={{ position: "absolute", top: "6px" }}>
                        В избранном
                      </span>
                    </button>
                  </div>
                ) : (
                  <div
                    id={elem.id}
                    style={{
                      position: "relative",
                    }}
                  >
                    <button
                      onClick={clickLike}
                      style={{ border: "none", backgroundColor: "transparent" }}
                    >
                      <FavoriteIcon style={likeDontShow} />
                      <span style={{ position: "absolute", top: "6px" }}>
                        В избранное
                      </span>
                    </button>
                  </div>
                )}
                <div id={elem.id} style={{ position: "relative" }}>
                  <button
                    onClick={clickDel}
                    style={{ border: "none", backgroundColor: "transparent" }}
                  >
                    <ClearIcon />
                    <span style={{ position: "absolute", top: "6px" }}>
                      DELETE
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h2>{elem.price}$</h2>
            </div>
          </div>
        </div>
        <hr className={style.hr} />
      </div>
    );
  });
  return (
    <div className={style.basket}>
      {basket[0] ? (
        <>
          <div className={style.basket_block}>
            <h1>
              Basket {basket.length}{" "}
              {basket.length == 1 ? "product" : "products"}
            </h1>
            {basketBlock}
          </div>
          <div className={style.null_block}></div>
          <div className={style.pay_block}>Блок ОПЛАТЫ</div>
        </>
      ) : (
        <div>The basket is empty</div>
      )}
    </div>
  );
};

export default Basket;

// const likeShow = {
//   display: "block",
//   backgroundColor: "green",
// };
// const likeDontShow = {
//   display: "block",
// };

//   <div style={{ margin: "0 auto", width: "80%" }}>
//     <div className={style.CategoryPage}>
//       <div style={{ margin: "0 auto" }}>
//         <img className={style.image} src={props.e.thumbnail} />
//       </div>
//       <div className={style.description}>
// <div id={props.e.id}>
//   <NavLink to={`/${props.e.category}/${props.e.id}`}>
//     <h3>{props.e.title}</h3>
//   </NavLink>
//   <p>{props.e.description}</p>
//   <p>Brand: {props.e.brand}</p>
//   <Rating
//     style={{ padding: "10px 0" }}
//     precision={0.5}
//     name="read-only"
//     size="small"
//     value={props.e.rating}
//     readOnly
//   />
//   <button style={like ? likeShow : likeDontShow} onClick={clickLike}>
//     В избранное
//   </button>
// </div>
//         <div id={props.e.id}>
//           <h2>{props.e.price}$</h2>
//           <AddToBasketButton basket={props.basket} />
//         </div>
//       </div>
//     </div>
//     <hr className={style.hr} />
//   </div>
