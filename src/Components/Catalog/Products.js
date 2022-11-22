import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productsSelector,
  errorSelector,
} from "../../Store/Products/ProductsSelector";
import { getProducts } from "../../Store/Products/ProductsSlice";
import ProductCategory from "./ProductCategory/ProductCategory";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Products.css";
import Error from "../Error/Error";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const error = useSelector(errorSelector);
  const requestProducts = async () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    requestProducts();
  }, []);

  const smartphones = products?.filter((elem) => {
    return elem.category == "smartphones";
  });
  const laptops = products?.filter((elem) => {
    return elem.category == "laptops";
  });
  const fragrances = products?.filter((elem) => {
    return elem.category == "fragrances";
  });
  const skincare = products?.filter((elem) => {
    return elem.category == "skincare";
  });
  const groceries = products?.filter((elem) => {
    return elem.category == "groceries";
  });
  const homeDecoration = products?.filter((elem) => {
    return elem.category == "home-decoration";
  });

  // Все элементы
  //   const productsElem = products?.map((elem, index) => {
  //     return <ProductCategory key={index} product={elem} />;
  //   });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <>
          <h1>Smartphones</h1>
          <Carousel draggable={false} responsive={responsive}>
            {smartphones?.map((elem, index) => {
              return <ProductCategory key={index} product={elem} />;
            })}
          </Carousel>
          <h1>Laptops</h1>
          <Carousel draggable={false} responsive={responsive}>
            {laptops?.map((elem, index) => {
              return <ProductCategory key={index} product={elem} />;
            })}
          </Carousel>
          <h1>Fragrances</h1>
          <Carousel draggable={false} responsive={responsive}>
            {fragrances?.map((elem, index) => {
              return <ProductCategory key={index} product={elem} />;
            })}
          </Carousel>
          <h1>Skincare</h1>
          <Carousel draggable={false} responsive={responsive}>
            {skincare?.map((elem, index) => {
              return <ProductCategory key={index} product={elem} />;
            })}
          </Carousel>
          <h1>Groceries</h1>
          <Carousel draggable={false} responsive={responsive}>
            {groceries?.map((elem, index) => {
              return <ProductCategory key={index} product={elem} />;
            })}
          </Carousel>
          <h1>Home decoration</h1>
          <Carousel draggable={false} responsive={responsive}>
            {homeDecoration?.map((elem, index) => {
              return <ProductCategory key={index} product={elem} />;
            })}
          </Carousel>
        </>
      )}
    </>
  );
};

export default Products;
