import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { getAddToBasket } from "../../Store/Products/ProductsSlice";

const AddToBasketButton = (props) => {
  // debugger;
  const dispatch = useDispatch();
  const addToBasket = (e) => {
    // let obj = {
    //   boolean: props.basket,
    //   id: Number(e.currentTarget.parentElement.id),
    // };
    dispatch(getAddToBasket(Number(e.currentTarget.parentElement.id)));
  };
  return (
    <>
      {props.basket ? (
        <Button
          onClick={addToBasket}
          variant="contained"
          color="success"
          style={{
            fontWeight: "bold",
            display: "block",
            boxShadow: "none",
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
            boxShadow: "none",
          }}
        >
          into a basket
        </Button>
      )}
    </>
  );
};

export default AddToBasketButton;
