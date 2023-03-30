import React, { useEffect } from "react";
import { useReducer } from "react";
import { initialState } from "../../store/InitialState";
import { reducerProducts } from "../../store/Reducer";
import { contextProduct } from "../../store/ContextProduct";
import { actions } from "../../store/Actions";
import axios from "axios";

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerProducts, initialState);
  useEffect(() => {
    axios.get("http://localhost:4000/cart").then((response) => {
      dispatch({ type: actions.SET_CART, payload: response.data });
    });
    axios.get("http://localhost:4000/products").then((response) => {
      dispatch({ type: actions.SET_PRODUCTS, payload: response.data });
    });
  }, []);

  return (
    <contextProduct.Provider value={{ state, dispatch }}>
      {children}
    </contextProduct.Provider>
  );
}

export default ContextProvider;
