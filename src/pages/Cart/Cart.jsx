import React, { useContext, useEffect, useState } from "react";
import "../../styles/styles.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { actions } from "../../store/Actions";
import { contextProduct } from "../../store/ContextProduct";
import axios from "axios";
import toast from "react-hot-toast";
import Toast from "../../components/Toast/Toast";
import { Link } from "react-router-dom";
function Cart() {
  const [shipping, setShipping] = useState(false);
  const { state, dispatch } = useContext(contextProduct);

  // calculate cart total price
  const cartTotalPrice = () => {
    let total = 0;
    state.cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  // calculate cart total price + shipping
  const cartTotalPriceWithShipping = () => {
    if (shipping) {
      return cartTotalPrice() + 20;
    }
    return cartTotalPrice();
  };

  // increment cart item's quantity
  const handleIncrementItemQuantity = async (item) => {
    await axios
      .put(`http://localhost:4000/cart/${item.id}`, {
        ...item,
        quantity: item.quantity + 1,
      })
      .then((res) =>
        dispatch({ type: actions.INCREMENT_ITEM_QUANTITY, payload: res.data })
      );
  };
  // decrement cart item's quantity
  const handleDecrementItemQuantity = async (item) => {
    await axios
      .put(`http://localhost:4000/cart/${item.id}`, {
        ...item,
        quantity: item.quantity - 1,
      })
      .then((res) =>
        dispatch({ type: actions.DECREMENT_ITEM_QUANTITY, payload: res.data })
      );
  };
  // calculate total price for each product
  const itemTotalPrice = (item) => {
    return item.quantity * item.price;
  };
  // delete item from cart
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:4000/cart/${id}`);
    dispatch({ type: actions.REMOVE_FROM_CART, payload: id });
  };
  // toast for item deleted successfully
  const notify = () => toast.success("Product removed successfully!");

  if (state.cart.length === 0)
    return (
      <>
        <div className="no-products">
          <img src="./assets/bag.png" alt="" />
          <p>No products yet.</p>
        </div>
      </>
    );
  return (
    <section className="section cart__area">
      <div className="container">
        <div className="responsive__cart-area">
          <form className="cart__form">
            <div className="cart__table table-responsive">
              <table width="100%" className="table">
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>NAME</th>
                    <th>UNIT PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {state.cart.map((item) => (
                    <tr key={item.id}>
                      <td className="product__thumbnail">
                        <a href="#">
                          <img src={item.image} alt="" />
                        </a>
                      </td>
                      <td className="product__name">
                        <a href="#">{item.title}</a>
                        <br />
                        <br />
                        <small>White/6.25</small>
                      </td>
                      <td className="product__price">
                        <div className="price">
                          <span className="new__price">${item.price}</span>
                        </div>
                      </td>
                      <td className="product__quantity">
                        <div className="input-counter">
                          <div>
                            <span
                              className="minus-btn"
                              onClick={() => handleDecrementItemQuantity(item)}
                            >
                              <svg>
                                <AiOutlineMinus />{" "}
                              </svg>
                            </span>
                            <input
                              type="text"
                              min="1"
                              value={item.quantity}
                              max="10"
                              className="counter-btn"
                            />
                            <span
                              className="plus-btn"
                              onClick={() => handleIncrementItemQuantity(item)}
                            >
                              <svg>
                                <AiOutlinePlus />{" "}
                              </svg>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="product__subtotal">
                        <div className="price">
                          <span className="new__price">
                            ${itemTotalPrice(item)}
                          </span>
                        </div>
                        <a href="#" className="remove__cart-item">
                          <svg>
                            {/* <use xlink:href="./assets/sprite.svg#icon-trash"></use> */}
                          </svg>
                        </a>
                      </td>
                      <td>
                        <div classNameName="delete_item">
                          <TiDelete
                            onClick={() => {
                              deleteItem(item.id);
                              notify();
                            }}
                          />
                          <Toast />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cart-btns">
              <div className="continue__shopping">
                {/* <a href="/">Continue Shopping</a> */}
                <Link to={{ pathname: "/" }}>Continue Shopping</Link>
              </div>
              <div className="check__shipping">
                <input
                  type="checkbox"
                  onChange={() => setShipping(!shipping)}
                />
                <span>Shipping(+20$)</span>
              </div>
            </div>

            <div className="cart__totals">
              <h3>Cart Totals</h3>
              <ul>
                <li>
                  Subtotal
                  <span className="new__price">${cartTotalPrice()}</span>
                </li>
                <li>
                  Shipping
                  <span>${shipping ? "20" : "0"}</span>
                </li>
                <li>
                  Total
                  <span className="new__price">
                    ${cartTotalPriceWithShipping()}
                  </span>
                </li>
              </ul>
              <a href="">PROCEED TO CHECKOUT</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Cart;
