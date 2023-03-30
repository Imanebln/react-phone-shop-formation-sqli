import React, { useContext } from "react";
import styles from "./ProductItem.module.css";
import { ImLoop2 } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { contextProduct } from "../../store/ContextProduct";
import { actions } from "../../store/Actions";
import axios from "axios";
import Toast from "../Toast/Toast";
import toast from "react-hot-toast";
const API_URL = "http://localhost:4000/cart";
function ProductItem({ product }) {
  const { state, dispatch } = useContext(contextProduct);
  const handleAddToCard = (product) => {
    // product to be added to cart
    let productItem = {
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    };
    // check if the product already exists in the cart
    const existingProductIndex = state.cart.findIndex(
      (product) => product.productId === productItem.productId
    );
    // if yes oncrement the product's quantity
    if (existingProductIndex !== -1) {
      const updatedCart = [...state.cart];
      const productCart = updatedCart[existingProductIndex];
      productCart.quantity += 1;
      axios.put(`${API_URL}/${productCart.id}`, productCart);
      dispatch({
        type: actions.INCREMENT_ITEM_QUANTITY,
        payload: productItem,
      });

      // if not add the new product to the cart
    } else {
      axios.post(API_URL, productItem).then((response) => {
        dispatch({ type: actions.ADD_TO_CART, payload: response.data });
      });
    }
  };
  const notify = () => toast.success("Product added to cart!");

  return (
    <div class="product category__products">
      <div class="product__header">
        <img src={product.image} alt="product" />
      </div>
      <div class="product__footer">
        <h3>{product.title}</h3>
        <div class="rating">
          <svg>
            <AiFillStar />{" "}
          </svg>
          <svg>
            <AiFillStar />{" "}
          </svg>
          <svg>
            <AiFillStar />{" "}
          </svg>
          <svg>
            <AiFillStar />{" "}
          </svg>
          <svg>
            <AiOutlineStar />{" "}
          </svg>
        </div>
        <div class="product__price">
          <h4>${product.price}</h4>
        </div>
        <a onClick={() => handleAddToCard(product)}>
          <button type="submit" class="product__btn" onClick={notify}>
            Add To Cart
            <Toast />
          </button>
        </a>
      </div>
      <ul>
        <li>
          <Link to={`product/${product.id}`}>
            <svg>
              <AiFillEye />{" "}
            </svg>
          </Link>
        </li>
        <li>
          <a data-tip="Add To Wishlist" data-place="left" href="#">
            <svg>
              <AiOutlineHeart />{" "}
            </svg>
          </a>
        </li>
        <li>
          <a data-tip="Add To Compare" data-place="left" href="#">
            <svg>
              <ImLoop2 />{" "}
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ProductItem;
