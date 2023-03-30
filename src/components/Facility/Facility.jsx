import React from "react";
import { IoAirplane } from "react-icons/io5";
import { HiCreditCard } from "react-icons/hi";
import { FaRegCreditCard } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import "../../styles/styles.css";
function Facility() {
  return (
    <section class="facility__section section" id="facility">
      <div class="container">
        <div
          class="facility__contianer"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div class="facility__box">
            <div class="facility-img__container">
              <svg>
                <IoAirplane />
              </svg>
            </div>
            <p>FREE SHIPPING WORLD WIDE</p>
          </div>

          <div class="facility__box">
            <div class="facility-img__container">
              <svg>
                <HiCreditCard />
              </svg>
            </div>
            <p>100% MONEY BACK GUARANTEE</p>
          </div>

          <div class="facility__box">
            <div class="facility-img__container">
              <svg>
                <FaRegCreditCard />
              </svg>
            </div>
            <p>MANY PAYMENT GATWAYS</p>
          </div>

          <div class="facility__box">
            <div class="facility-img__container">
              <svg>
                <ImHeadphones />
              </svg>
            </div>
            <p>24/7 ONLINE SUPPORT</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facility;
