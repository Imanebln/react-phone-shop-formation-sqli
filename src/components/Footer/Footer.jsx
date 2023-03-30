import React from "react";
import styles from "./Footer.module.css";
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { FaRegPaperPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__top}>
          <div className={styles.footer_top__box}>
            <h3>EXTRAS</h3>
            <a href="#">Brands</a>
            <a href="#">Gift Certificates</a>
            <a href="#">Affiliate</a>
            <a href="#">Specials</a>
            <a href="#">Site Map</a>
          </div>
          <div className={styles.footer_top__box}>
            <h3>INFORMATION</h3>
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
            <a href="#">Site Map</a>
          </div>
          <div className={styles.footer_top__box}>
            <h3>MY ACCOUNT</h3>
            <a href="#">My Account</a>
            <a href="#">Order History</a>
            <a href="#">Wish List</a>
            <a href="#">Newsletter</a>
            <a href="#">Returns</a>
          </div>
          <div className={styles.footer_top__box}>
            <h3>CONTACT US</h3>
            <div>
              <span>
                <svg>
                  <MdLocationOn />
                </svg>
              </span>
              42 Dream House, Dreammy street, 7131 Dreamville, USA
            </div>
            <div>
              <span>
                <svg>
                  <TfiEmail />
                </svg>
              </span>
              company@gmail.com
            </div>
            <div>
              <span>
                <svg>
                  <AiFillPhone />{" "}
                </svg>
              </span>
              456-456-4512
            </div>
            <div>
              <span>
                <svg>
                  <FaRegPaperPlane />{" "}
                </svg>
              </span>
              Dream City, USA
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <div className={styles.footer_bottom__box}></div>
        <div className={styles.footer_bottom__box}></div>
      </div>
    </footer>
  );
}

export default Footer;
