import React from "react";
// import styles from '../screen4.css';
import "../App.css";

function header(props) {
  return (
    <>
      <div class="header">
        <div class="header-img">
          <img src="../images jpg/foodPlateHeading.jpg" />
        </div>
        <div class="header-info-title">
          <h2>Mama's kitchen</h2>
        </div>
        <div class="header-info-details1">
          <h3>North Indian, chinese</h3>
          <h3 class="location">Mumbai, Andheri, Road Name</h3>
        </div>
        <div class="header-info-details2">
          {/* <h3 class="location">Mumbai, Andheri, Road Name</h3> */}
        </div>

        <div class="header-rating">
          <img src="../images jpg/Reviews/Rating.png" />
        </div>
        <div class="header-reviews">
          <p>205 reviews</p>
        </div>
        <div class="header-weeks-menu">
          <p>Week's menu</p>
        </div>
        <div class="header-week">
          <div class="week">
            <ul>
              <li>
                <a href="#">day1</a>
              </li>
              <li>
                <a href="#">day1</a>
              </li>
              <li>
                <a href="#">day1</a>
              </li>
              <li>
                <a href="#">day1</a>
              </li>
              <li>
                <a href="#">day1</a>
              </li>
              <li>
                <a href="#">day1</a>
              </li>
              <li>
                <a href="#">day1</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
