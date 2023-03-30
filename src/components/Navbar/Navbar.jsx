import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { ImUser } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import "../../styles/styles.css";
import { contextProduct } from "../../store/ContextProduct";
import LoginModal from "../Login/LoginModal";
function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { state, dispatch } = useContext(contextProduct);
  const shoppingCartRef = useRef(null);

  const handleShoppingCart = () => {
    let shoppingCart = document.querySelector(".shopping-cart");
    shoppingCart.classList.toggle("active");
  };

  const handleMenu = () => {
    let menu = document.querySelector(".nav__menu");
    let navContainer = document.querySelector(".nav__menu");
    menu.classList.add("open");
    document.body.classList.add("active");
    navContainer.style.left = "0";
    navContainer.style.width = "30rem";
  };

  const handleCloseMenu = () => {
    const menu = document.querySelector(".nav__menu");
    const navContainer = document.querySelector(".nav__menu");
    menu.classList.remove("open");
    document.body.classList.remove("active");
    navContainer.style.left = "-30rem";
    navContainer.style.width = "0";
  };

  const closeSHoppingCart = () => {
    let shoppingCart = document.querySelector(".shopping-cart");
    shoppingCart.classList.remove("active");
  };

  const cartTotalPrice = () => {
    let total = 0;
    state.cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const closeShoppingCart = () => {
    setShowCart(false);
  };

  const handleLoginForm = () => {
    let loginForm = document.querySelector(".login-form");
    loginForm.classList.toggle("active");
  };

  const handleSearchForm = () => {
    let searchForm = document.querySelector(".search-form");
    searchForm.classList.toggle("active");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shoppingCartRef.current &&
        !shoppingCartRef.current.contains(event.target)
      ) {
        closeShoppingCart();
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <header id="header" class="header">
        <div class="navigation">
          <div class="container">
            <nav class="nav">
              <div class="nav__hamburger">
                <svg>
                  <GiHamburgerMenu onClick={handleMenu} />
                </svg>
              </div>

              <div class="nav__logo">
                <a href="/" class="scroll_link">
                  PHONE
                </a>
              </div>

              <div class="nav__menu">
                <div class="menu__top">
                  <span class="nav__category">PHONE</span>
                  <a href="#" class="close__toggle">
                    <svg>
                      <ImCross onClick={handleCloseMenu} />
                    </svg>
                  </a>
                </div>
                <ul class="nav__list">
                  <li class="nav__item">
                    <a href="/" class="nav__link">
                      Home
                    </a>
                  </li>

                  <li class="nav__item">
                    {" "}
                    <Link to={"/"} class="nav__link">
                      Products
                    </Link>
                  </li>
                  <li class="nav__item">
                    <a href="#" class="nav__link">
                      Blog
                    </a>
                  </li>
                  <li class="nav__item">
                    <a href="#footer" class="nav__link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div class="nav__icons">
                <a href="#" class="icon__item" onClick={handleLoginForm}>
                  <svg class="icon__user">
                    <ImUser />
                  </svg>
                </a>

                <a href="#" class="icon__item" onClick={handleSearchForm}>
                  <svg class="icon__search">
                    <AiOutlineSearch />
                  </svg>
                </a>
                {/* <Link to={"/cart"}> */}
                <a
                  style={{ cursor: "pointer" }}
                  id="cart-btn"
                  class="icon__item"
                  onClick={handleShoppingCart}
                >
                  <svg class="icon__cart">
                    <TiShoppingCart />
                  </svg>

                  <span id="cart__total">{state.cart.length}</span>
                </a>
                {/* </Link> */}
              </div>
            </nav>
          </div>
        </div>
        <div
          className={`shopping-cart ${showCart ? "active" : ""}`}
          ref={shoppingCartRef}
          class="shopping-cart"
          id="shopping-cart"
        >
          {state.cart.slice(0, 3).map((item, index) => (
            <div class="box" key={index}>
              {/* <i class="fas fa-trash"></i> */}
              <img src={item.image} />
              <div class="content">
                <h3>{item.title}</h3>
                <span class="price">${item.price}/-</span>
                <span class="quantity">qty : {item.quantity}</span>
              </div>
            </div>
          ))}

          <div class="total">Total : ${cartTotalPrice()}/-</div>
          <Link to="cart" class="btn" onClick={closeSHoppingCart}>
            Check out
          </Link>
        </div>
        {/* <div class="searchF">
          <form action="" class="search-form">
            <input type="search" id="search-box" placeholder="Search here.." />
          </form>
        </div> */}
        <LoginModal />
      </header>
    </div>
  );
}

export default Navbar;
