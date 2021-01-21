import React from "react";
import "../App.css";

function Reviews() {
  return (
    <>
      <div class="review-container">
        <div class="reviews-header">
          <h2>Reviews</h2>
        </div>
        <div class="rate-your-experience-header">
          <p class="">Rate your Experience</p>
        </div>
        <div class="rate-your-experience-rating">
          <p class="rating">
            <input type="radio" name="rating" id="rating-5" />
            <label for="rating-5"></label>
            <input type="radio" name="rating" id="rating-4" />
            <label for="rating-4"></label>
            <input type="radio" name="rating" id="rating-3" />
            <label for="rating-3"></label>
            <input type="radio" name="rating" id="rating-2" />
            <label for="rating-2"></label>
            <input type="radio" name="rating" id="rating-1" />
            <label for="rating-1"></label>
          </p>
        </div>

        <div class="submit-review-header">
          <p>Write a Review</p>
        </div>

        <div class="submit-review-input">
          {/* <input type="text" class="input-area" /> */}
          <textarea class="input-area"></textarea>
        </div>

        <div class="submit-review-button">
          <button type="submit" class="submit-review ">
            SUBMIT
          </button>
        </div>

        <div class="customer-reviews">
          <p class=" customer-review-header">Customer Reviews</p>
        </div>

        <div class="rating-and-total-reviews">
          <div class="rating-and-total-reviews-top">
            <img
              src="../images jpg/Reviews/Rating.png"
              class="reviews-rating"
            />
            <h3 class="total-reviews">205 Reviews</h3>
          </div>

          <div class="rating-and-total-reviews-bottom">
            <hr class="review-line"></hr>
            <br />
          </div>
        </div>

        {/* {/* <!-- user review start  --> */}
        <div class="user-reviews">
          <div class="user-review-container">
            <img src="../images jpg/Reviews/Profile.png" class="profile-pic" />
            <h3 class="user-name">Rupali Singh</h3>
            <h3 class="review-date">30th August 2020</h3>

            <img
              src="../images jpg/Reviews/Rating.png"
              class="user-rating-img"
            />
            <p class="user-rating-status">Disappointed</p>

            <p class="user-review">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              quisquam iste error ab ut sunt officiis, nobis delectus.
              Accusamus, maxime. Libero, minima! Placeat, veniam nulla dolores
              nemo dignissimos adipisci explicabo? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Rem quisquam iste error ab ut sunt
              officiis, nobis delectus. Accusamus, maxime. Libero, minima!
              Placeat, veniam nulla dolores nemo dignissimos adipisci
              explicabo?Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Rem quisquam iste error ab ut sunt officiis, nobis delectus.
              Accusamus, maxime. Libero, minima! Placeat, veniam nulla dolores
              nemo dignissimos adipisci explicabo?
            </p>
          </div>

          <hr class="review-line"></hr>

          
        </div>

        {/* <!-- user review end  --> */}
      </div>
    </>
  );
}

export default Reviews;
