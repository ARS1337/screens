import React from "react";
import "../App.css";

function Recommended() {
  return (
    <>
      <div class="content">
        <div class="content-title col-12">
          <h2>Recommended</h2>
        </div>
        <div class="content-card">
          <div class="left col-10">
            <div class="left-image ">
              <img src="images jpg/foodPlateHeading.jpg" class="food-img" />
              <img src="images jpg/greenDot.JPG" class="green-dot" />
            </div>
            <div class="info ">
              <h3 class="info-title">Paratha with tomato sauce</h3>
              <h3>taste lik nveere ggdwwjfa cajajacamckam</h3>
            </div>
          </div>
          <div class="right ">
            <div class="price">
              <h1>Rs. 180</h1>
            </div>
            <div class="add-to-cart">
              <button>ADD</button>
            </div>
          </div>
        </div>
        <hr class="line"></hr>
      </div>
    </>
  );
}

export default Recommended;
