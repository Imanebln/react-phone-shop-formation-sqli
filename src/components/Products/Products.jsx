import React, { useContext, useEffect, useState } from "react";
import { contextProduct } from "../../store/ContextProduct";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./Products.module.css";
import { actions } from "../../store/Actions";
import axios from "axios";
function Products() {
  const { state, dispatch } = useContext(contextProduct);
  const [searchValue, setSearchValue] = useState("");

  // filter products based on search value
  const filteredProducts = state.products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="container" id="products">
      <section className="category__section section" id="category">
        <div className="tab__list">
          <div className="title__container tabs">
            <div className="section__titles category__titles ">
              <div
                className="section__title filter-btn active"
                data-id="All Products"
              >
                <span className="dot"></span>
                <h1 className="primary__title">All Products</h1>
              </div>
            </div>
            <div className="section__titles">
              <div
                className="section__title filter-btn"
                data-id="Trending Products"
              >
                <span className="dot"></span>
                <h1 className="primary__title">Trending Products</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="category__container"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="searchF">
            <form action="" className="search-form">
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                type="search"
                id="search-box"
                placeholder="Search here.."
              />
            </form>
          </div>
          <div className="category__center">
            {filteredProducts.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
