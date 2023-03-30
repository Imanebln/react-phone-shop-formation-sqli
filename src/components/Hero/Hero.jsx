import React from "react";
import "../../styles/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Hero() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Keyboard, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div class="hero">
          <div class="glide" id="glide_1">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li class="glide__slide">
                  <div class="hero__center">
                    <div class="hero__left">
                      <span class="">New Inspiration 2020</span>
                      <h1 class="">PHONES MADE FOR YOU!</h1>
                      <p>Trending from mobile and headphone style collection</p>
                      <a href="#">
                        <button class="hero__btn">SHOP NOW</button>
                      </a>
                    </div>
                    <div class="hero__right">
                      <div class="hero__img-container">
                        <img
                          class="banner_01"
                          src="./assets/banner_01.png"
                          alt="banner2"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="hero">
          <div class="glide" id="glide_1">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li class="glide__slide">
                  <div class="hero__center">
                    <div class="hero__left">
                      <span class="">New Inspiration 2020</span>
                      <h1 class="">PHONES MADE FOR YOU!</h1>
                      <p>Trending from mobile and headphone style collection</p>
                      <a href="#">
                        <button class="hero__btn">SHOP NOW</button>
                      </a>
                    </div>
                    <div class="hero__right">
                      <div class="hero__img-container">
                        <img
                          class="banner_01"
                          src="./assets/banner_02.png"
                          alt="banner2"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;
