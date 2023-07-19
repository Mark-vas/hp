import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsSelector } from "../../Store/Products/ProductsSelector";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { getProducts } from "../../Store/Products/ProductsSlice";
import AddToBasketButton from "../AddToBasketButton/AddToBasketButton";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ProductPage.css";
import { likeToggle } from "../../Store/Products/ProductsSlice";
import imgFavourites from "../../Images/favourites";

const ProductPage = () => {
  let { id } = useParams();
  const product = useSelector(productsSelector);
  const dispatch = useDispatch();
  const requestProductInf = async () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    requestProductInf();
  }, []);

  const clickLike = (e) => {
    let id = Number(e.currentTarget.parentElement.id);
    dispatch(likeToggle(id));
  };

  const likeShow = {
    backgroundColor: "crimson",
    width: "40px",
    borderRadius: "50%",
  };
  const likeDontShow = {
    backgroundColor: "rgb(0,141,210)",
    width: "40px",
    borderRadius: "50%",
  };

  const productInformation = product?.filter((e) => id == e.id);
  let images = productInformation[0]?.images.map((img, index) => {
    return (
      <img
        key={index}
        style={{
          maxHeight: "300px",
          maxWidth: "500px",
          objectFit: "contain",
        }}
        src={img}
      ></img>
    );
  });

  return (
    <>
      {productInformation[0] ? (
        <div>
          <h1 style={{ marginTop: 0 }}>{productInformation[0].title}</h1>
          <div className="description_block">
            <Carousel
              style={{ margin: "0" }}
              showArrows={false}
              showStatus={false}
            >
              {images}
            </Carousel>
            <div id={productInformation[0].id}>
              <p>{productInformation[0].description}</p>
              <p>${productInformation[0].price}</p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  precision={0.1}
                  name="text-feedback"
                  value={productInformation[0].rating}
                  readOnly
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Box>({productInformation[0].rating} out of 5)</Box>
              </Box>
              <p>In stock: {productInformation[0].stock}</p>
              <button
                onClick={clickLike}
                style={{
                  backgroundColor: "transparent",
                  borderStyle: "none",
                  padding: 0,
                }}
              >
                <img
                  style={productInformation[0].like ? likeShow : likeDontShow}
                  src={imgFavourites}
                />
              </button>
              <AddToBasketButton basket={productInformation[0].basket} />
            </div>
          </div>
        </div>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default ProductPage;
