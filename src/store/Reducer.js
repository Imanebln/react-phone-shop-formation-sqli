import { actions } from "./Actions";
import { initialState } from "./InitialState";
export const reducerProducts = (state, action) => {
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actions.SET_PRODUCT:
      return { ...state, product: action.payload };
    case actions.SET_CART:
      return { ...state, cart: action.payload };
    case actions.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case actions.INCREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            while (item.quantity < 10)
              return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case actions.DECREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            while (item.quantity > 1)
              return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    case actions.SET_TOTAL_PRODUCT_PRICE:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, totalPrice: item.quantity * item.price };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
