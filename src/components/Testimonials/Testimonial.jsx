import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
function Testimonial() {
  return (
    <section class="section testimonial" id="testimonial">
      <div class="testimonial__container">
        <div class="glide" id="glide_4">
          <div class="glide__track" data-glide-el="track">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Keyboard]}
            >
              <ul class="glide__slides">
                <SwiperSlide>
                  <li class="glide__slide">
                    <div class="testimonial__box">
                      <div class="client__image">
                        <img src="./assets/profile1.jpg" alt="profile" />
                      </div>
                      <p>
                        I had an excellent experience shopping at this phone
                        shop website. The selection of headphones and
                        smartphones was impressive, and the prices were very
                        competitive. I was also impressed with the fast shipping
                        and excellent customer service. Highly recommended!
                      </p>
                      <div class="client__info">
                        <h3>John Smith</h3>
                        <span>Founder at Apple</span>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li class="glide__slide">
                    <div class="testimonial__box">
                      <div class="client__image">
                        <img src="./assets/profile2.jpg" alt="profile" />
                      </div>
                      <p>
                        I recently purchased a new smartphone from this phone
                        shop website and I couldn't be happier with my purchase.
                        The phone was brand new and came with all the
                        accessories and manuals. The price was also very
                        reasonable compared to other online retailers. I highly
                        recommend this website for anyone looking to buy a new
                        phone.
                      </p>
                      <div class="client__info">
                        <h3>John Smith</h3>
                        <span>Founder at Apple</span>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li class="glide__slide">
                    <div class="testimonial__box">
                      <div class="client__image">
                        <img src="./assets/profile3.jpg" alt="profile" />
                      </div>
                      <p>
                        This phone shop website has amazing customer service! I
                        had an issue with a product I ordered and they responded
                        to my email within a few hours and quickly resolved the
                        problem. It's refreshing to see a company that truly
                        cares about their customers.
                      </p>
                      <div class="client__info">
                        <h3>John Smith</h3>
                        <span>Founder at Apple</span>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
                <SwiperSlide>
                  <li class="glide__slide">
                    <div class="testimonial__box">
                      <div class="client__image">
                        <img src="./assets/profile4.jpg" alt="" />
                      </div>
                      <p>
                        I love the selection of headphones on this phone shop
                        website. They have everything from budget-friendly
                        options to high-end models, and the descriptions are
                        very detailed so you know exactly what you're getting.
                        I've purchased several pairs of headphones from this
                        website and have never been disappointed.
                      </p>
                      <div class="client__info">
                        <h3>John Smith</h3>
                        <span>Founder at Apple</span>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
              </ul>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
