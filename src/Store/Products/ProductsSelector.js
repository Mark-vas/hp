export const productsSelector = (state) => state.products.products;
export const errorSelector = (state) => state.products.error;
export const likeProductsSelector = (state) => state.products.likeProducts;
export const productsBasketSelector = (state) => state.products.productsBasket;
export const productsFavouritesSelector = (state) =>
  state.products.likeProducts;
