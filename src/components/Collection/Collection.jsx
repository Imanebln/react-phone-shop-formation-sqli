import React from "react";
import "../../styles/styles.css";
function Collection() {
  return (
    <div className="container">
      <section id="collection" class="section collection">
        <div
          class="collection__container"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div class="collection__box">
            <div class="img__container">
              <img
                class="collection_02"
                src="./assets/collection_02.png"
                alt=""
              />
            </div>
            <div class="collection__content">
              <div class="collection__data">
                <span>New Colors Introduced</span>
                <h1>HEADPHONES</h1>
                <a href="#shop">SHOP NOW</a>
              </div>
            </div>
          </div>
          <div class="collection__box">
            <div class="img__container">
              <img
                class="collection_01"
                src="./assets/collection_01.png"
                alt=""
              />
            </div>
            <div class="collection__content">
              <div class="collection__data">
                <span>Phone Device Presets</span>
                <h1>SMARTPHONES</h1>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Collection;
