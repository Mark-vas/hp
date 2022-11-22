import axios from "axios";

export const api = {
  async products() {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data;
  },
  async smartphones() {
    const res = await axios.get(
      "https://dummyjson.com/products/category/smartphones"
    );
    return res.data;
  },
  async laptops() {
    const res = await axios.get(
      "https://dummyjson.com/products/category/laptops"
    );
    return res.data;
  },
  async fragrances() {
    const res = await axios.get(
      "https://dummyjson.com/products/category/fragrances"
    );
    return res.data;
  },
  async skincare() {
    const res = await axios.get(
      "https://dummyjson.com/products/category/skincare"
    );
    return res.data;
  },
  async groceries() {
    const res = await axios.get(
      "https://dummyjson.com/products/category/groceries"
    );
    return res.data;
  },
  async homeDecoration() {
    const res = await axios.get(
      "https://dummyjson.com/products/category/home-decoration"
    );
    return res.data;
  },
};
