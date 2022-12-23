import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productPageInfSelector } from "../../Store/Products/ProductsSelector";
import { getProductPage } from "../../Store/Products/ProductsSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { getProducts } from "../../Store/Products/ProductsSlice";
import AddToBasketButton from "../AddToBasketButton/AddToBasketButton";
import { productsBasketSelector } from "../../Store/Products/ProductsSelector";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ProductPage.css";
import { productsFavouritesSelector } from "../../Store/Products/ProductsSelector";
import { likeToggle } from "../../Store/Products/ProductsSlice";

const ProductPage = () => {
  let { id } = useParams();
  const productInf = useSelector(productPageInfSelector);
  const dispatch = useDispatch();
  const requestProductInf = async () => {
    dispatch(getProductPage(id));
    dispatch(getProducts());
  };
  useEffect(() => {
    requestProductInf();
  }, []);

  const clickLike = (e) => {
    let id = Number(e.currentTarget.parentElement.id);
    dispatch(likeToggle(id));
  };

  let like = false;

  const favouriteProducts = useSelector(productsFavouritesSelector);

  if (favouriteProducts.length > 0) {
    favouriteProducts.forEach((element) => {
      if (element.id == id) {
        like = true;
      }
    });
  }

  const likeShow = {
    display: "block",
    backgroundColor: "green",
  };
  const likeDontShow = {
    display: "block",
  };

  let boolean = false;

  const basket = useSelector(productsBasketSelector);

  if (!Object.keys(productInf).length == 0) {
    if (basket.length > 0) {
      basket.forEach((element) => {
        if (element.id == productInf.id) {
          boolean = true;
        }
      });
    }
  }

  let images;

  if (!Object.keys(productInf).length == 0) {
    images = productInf?.images.map((img, index) => {
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
  }

  return (
    <>
      {!Object.keys(productInf).length == 0 ? (
        <div>
          <h1 style={{ marginTop: 0 }}>{productInf.title}</h1>
          <div className="description_block">
            <Carousel
              style={{ margin: "0" }}
              showArrows={false}
              showStatus={false}
            >
              {images}
            </Carousel>
            <div id={productInf.id}>
              <p>{productInf.description}</p>
              <p>${productInf.price}</p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  precision={0.1}
                  name="text-feedback"
                  value={productInf.rating}
                  readOnly
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Box>({productInf.rating} out of 5)</Box>
              </Box>
              <p>In stock: {productInf.stock}</p>
              <button
                style={like ? likeShow : likeDontShow}
                onClick={clickLike}
              >
                В избранное
              </button>{" "}
              <AddToBasketButton basket={boolean} />
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
