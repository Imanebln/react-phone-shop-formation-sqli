import React from "react";
import styles from "./NewsLetter.module.css";
function NewsLetter() {
  return (
    <div className="container">
      <section class="section newsletter" id="contact">
        <div class="container">
          <div class="newsletter__content">
            <div class="newsletter__data">
              <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
              <p>
                A short sentence describing what someone will receive by
                subscribing
              </p>
            </div>
            <form action="#">
              <input
                type="email"
                placeholder="Enter your email address"
                class="newsletter__email"
              />
              <a class="newsletter__link" href="#">
                subscribe
              </a>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsLetter;
