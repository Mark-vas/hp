import axios from "axios";

export const api = {
  async products() {
    const res = await axios.get(`https://dummyjson.com/products?`);
    return res.data;
  },
};
