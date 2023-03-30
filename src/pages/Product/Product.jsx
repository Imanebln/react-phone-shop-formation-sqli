import React, { useContext, useEffect } from "react";
import { actions } from "../../store/Actions";
import { contextProduct } from "../../store/ContextProduct";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { BiCrop } from "react-icons/bi";
import { FiTruck } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import "../../styles/styles.css";
import Toast from "../../components/Toast/Toast";
import { toast } from "react-hot-toast";

const API_URL = "http://localhost:4000/products";

function Product() {
  const { state, dispatch } = useContext(contextProduct);
  const { productId } = useParams(state);

  console.log(state.products);
  // toast for product added successfully
  const notify = () => toast.success("Product added to cart!");

  // set the current product to the state
  useEffect(() => {
    axios.get(`${API_URL}/${productId}`).then((response) => {
      dispatch({ type: actions.SET_PRODUCT, payload: response.data });
    });
  }, [productId]);

  // add product to the cart
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

  // get images for same product
  const productImages = () => {
    return state.products.filter(
      (product) =>
        product.title
          ?.split(" ")[0]
          .toLowerCase()
          .includes(state.product.title?.split(" ")[0].toLowerCase()) &&
        product.image
    );
  };
  console.log(productImages());
  return (
    <>
      <div class="container">
        <section class="section product-details__section">
          <div class="product-detail__container">
            <div class="product-detail__left">
              <div class="details__container--left">
                <div class="product__pictures">
                  {productImages()
                    .slice(0, 4)
                    .map((item, index) => (
                      <div class="pictures__container" key={index}>
                        <img
                          class="picture"
                          src={`../../${item.image}`}
                          id="pic1"
                        />
                      </div>
                    ))}

                  {/* <div class="pictures__container">
                    <img
                      class="picture"
                      src={`../../${state.product.image}`}
                      id="pic2"
                    />
                  </div>
                  <div class="pictures__container">
                    <img
                      class="picture"
                      src={`../../${state.product.image}`}
                      id="pic3"
                    />
                  </div>
                  <div class="pictures__container">
                    <img
                      class="picture"
                      src={`../../${state.product.image}`}
                      id="pic4"
                    />
                  </div> */}
                </div>
                <div class="product__picture" id="product__picture">
                  <div class="picture__container">
                    <img src={`../../${state.product.image}`} id="pic" />
                  </div>
                </div>
                <div class="zoom" id="zoom"></div>
              </div>

              <div class="product-details__btn">
                <a
                  class="add"
                  href="#"
                  onClick={() => {
                    handleAddToCard(state.product);
                    notify();
                  }}
                >
                  <span>
                    <svg>
                      <BsCartPlus />
                    </svg>
                  </span>
                  <Toast />
                  ADD TO CART
                </a>
                <a class="buy" href="#">
                  <span>
                    <svg>
                      <BsCreditCard />
                    </svg>
                  </span>
                  BUY NOW
                </a>
              </div>
            </div>

            <div class="product-detail__right">
              <div class="product-detail__content">
                <h3>{state.product.title}</h3>
                <div class="price">
                  <span class="new__price">${state.product.price}</span>
                </div>
                <div class="product__review">
                  <div class="rating">
                    <svg>
                      <AiFillStar />
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
                      <AiOutlineStar />
                    </svg>
                  </div>
                  <a href="#" class="rating__quatity">
                    3 reviews
                  </a>
                </div>
                <p>
                  Unleash the Power of Technology with the Latest iPhone -
                  Available Now at Our Phone Shop!
                </p>
                <div class="product__info-container">
                  <ul class="product__info">
                    <li class="select">
                      <div class="select__option">
                        <label for="colors">Color</label>
                        <select name="colors" id="colors" class="select-box">
                          <option value="blue">blue</option>
                          <option value="red">red</option>
                        </select>
                      </div>
                      <div class="select__option">
                        <label for="size">Inches</label>
                        <select name="size" id="size" class="select-box">
                          <option value="6.65">6.65</option>
                          <option value="7.50">7.50</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div class="input-counter">
                        <span>Quantity:</span>
                        <div>
                          <span class="minus-btn">
                            <svg>
                              <AiOutlineMinus />
                            </svg>
                          </span>
                          <input
                            type="text"
                            min="1"
                            value="1"
                            max="10"
                            class="counter-btn"
                          />
                          <span class="plus-btn">
                            <svg>
                              <AiOutlinePlus />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <span>Subtotal:</span>
                      <a href="#" class="new__price">
                        $250.99
                      </a>
                    </li>
                    <li>
                      <span>Brand:</span>
                      <a href="#"> {state.product.title?.split(" ")[0]}</a>
                    </li>
                    <li>
                      <span>Product Type:</span>
                      <a href="#">
                        {state.product.title
                          ?.toLowerCase()
                          .includes("samsung") ||
                        state.product.title?.toLowerCase().includes("iphone")
                          ? "Smartphone"
                          : "Headphone"}
                      </a>
                    </li>
                    <li>
                      <span>Availability:</span>
                      <a href="#" class="in-stock">
                        In Stock (7 Items)
                      </a>
                    </li>
                  </ul>
                  <div class="product-info__btn">
                    <a href="#">
                      <span>
                        <svg>
                          <BiCrop />
                        </svg>
                      </span>
                      &nbsp; SIZE GUIDE
                    </a>
                    <a href="#">
                      <span>
                        <svg>
                          <FiTruck />
                        </svg>
                      </span>
                      &nbsp; SHIPPING
                    </a>
                    <a href="#">
                      <span>
                        <svg>
                          <BsEnvelope />
                        </svg>
                        &nbsp;
                      </span>
                      ASK ABOUT THIS PRODUCT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="product-detail__bottom">
            <div class="title__container tabs">
              <div class="section__titles category__titles ">
                <div
                  class="section__title detail-btn active"
                  data-id="description"
                >
                  <span class="dot"></span>
                  <h1 class="primary__title">Description</h1>
                </div>
              </div>

              <div class="section__titles">
                <div class="section__title detail-btn" data-id="reviews">
                  <span class="dot"></span>
                  <h1 class="primary__title">Reviews</h1>
                </div>
              </div>

              <div class="section__titles">
                <div class="section__title detail-btn" data-id="shipping">
                  <span class="dot"></span>
                  <h1 class="primary__title">Shipping Details</h1>
                </div>
              </div>
            </div>

            {/* <div class="detail__content"></div> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Product;
