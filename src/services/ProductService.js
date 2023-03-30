import axios from "axios";

const API_URL = "http://localhost:4000/products";

// export const getProducts = async () => {
//   axios.get(API_URL).then((response) => {
//     dispatch({ type: actions.SET_PRODUCTS, payload: response.data });
//   });
// };

export const getProductById = (id) => {
  let product;
  axios.get(`${API_URL}/${id}`).then((response) => {
    product = response.data;
  });
  return product;
};
