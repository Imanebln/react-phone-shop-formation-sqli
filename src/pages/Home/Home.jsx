import React from "react";
import Collection from "../../components/Collection/Collection";
import Facility from "../../components/Facility/Facility";
import Hero from "../../components/Hero/Hero";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Products from "../../components/Products/Products";
import styles from "./Home.module.css";
import "../../styles/styles.css";
import { TiArrowUpThick } from "react-icons/ti";
import Testimonial from "../../components/Testimonials/Testimonial";
function Home() {
  const navBar = document.querySelector(".navigation");
  const gotoTop = document.querySelector(".goto-top");
  // window.addEventListener("scroll", (e) => {
  //   const scrollHeight = window.pageYOffset;
  //   const navHeight = navBar.getBoundingClientRect().height;
  //   if (scrollHeight > navHeight) {
  //     navBar.classList.add("fix__nav");
  //   } else {
  //     navBar.classList.remove("fix__nav");
  //   }

  //   if (scrollHeight > 300) {
  //     gotoTop.classList.add("show-top");
  //   } else {
  //     gotoTop.classList.remove("show-top");
  //   }
  // });
  return (
    <div>
      <Hero />
      <Collection />
      <Products />
      <Facility />
      <Testimonial />
      <NewsLetter />

      <a href="#header" class="goto-top scroll-link">
        <svg>
          <TiArrowUpThick />
        </svg>
      </a>
    </div>
  );
}

export default Home;
