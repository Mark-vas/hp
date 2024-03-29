import React from "react";
import { useSelector } from "react-redux";
import style from "./Basket.module.css";
import { NavLink } from "react-router-dom";
import {
  likeToggle,
  getDelElemFromBasket,
  plusElemInTheBasket,
  minusElemInTheBasket,
} from "../../Store/Products/ProductsSlice";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import { productsSelector } from "../../Store/Products/ProductsSelector";

const Basket = () => {
  const prod = useSelector(productsSelector);
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

  let basket = prod?.filter((elem) => {
    return elem.basket == true;
  });

  let obj = {
    sum: 0,
    total: 0,
  };
  basket?.forEach((e) => {
    obj.sum = obj.sum + e.price * e.totalElemInBasket;
    obj.total = obj.total + e.totalElemInBasket;
  });

  const basketBlock = basket?.map((elem, index) => {
    const clickDel = (e) => {
      dispatch(getDelElemFromBasket(Number(e.currentTarget.parentElement.id)));
    };

    const plusElem = (e) => {
      dispatch(plusElemInTheBasket(Number(e.currentTarget.parentElement.id)));
    };

    const minusElem = (e) => {
      dispatch(minusElemInTheBasket(Number(e.currentTarget.parentElement.id)));
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
                {elem.like ? (
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
              <h2>${elem.price}</h2>
              <div id={elem.id}>
                <button
                  onClick={elem.totalElemInBasket == 1 ? clickDel : minusElem}
                >
                  -
                </button>
                <span>{elem.totalElemInBasket}</span>
                <button onClick={plusElem}>+</button>
              </div>
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
              Basket{" "}
              <span>
                {basket.length} {basket.length == 1 ? "product" : "products"}
              </span>
            </h1>
            {basketBlock}
          </div>
          <div className={style.null_block}></div>
          <div className={style.pay_block}>
            <div className={style.border_pay_block}>
              <h1>Итого: ${obj.sum}</h1>
              <p>Всего товаров: {obj.total}</p>
            </div>
            <a
              target="_blank"
              href="https://hh.ru/resume/8ac4e48aff08e59a610039ed1f674139614f35"
            >
              <button className={style.button_pay}>Pay</button>
            </a>
          </div>
        </>
      ) : (
        <div>The basket is empty</div>
      )}
    </div>
  );
};

export default Basket;
