import React from "react";
import "../App.css";
import Quote from "./Quote";
import Reviews from "./Reviews";
import Recommended from "./Recommended";
import Videos from "./Videos";

function Playground() {
  return (
    <>
      <div class="mainbg">
        <div class="mainbg-title">
          <div class="main-location">
            <div class="search-box-left">
              <img src="images jpg/title/location-marker.png" />
              <select id="cars" name="cars" class="location-list">
                <option value="volvo" selected>
                  Volvo
                </option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div class="company-name">
            <img src="images jpg/title/logo white.png" />
          </div>
          <div class="help" id="help">
            <img src="images jpg/title/Warning.png" />
            <p>Help</p>
          </div>
          <div class="user-login">
            <label>Login</label>
          </div>
          <div class="signup">
            <label>Signup</label>
          </div>
          <div class="mainbg-search">
            <input
              type="text"
              id="mainbg-search"
              placeholder="Search for dishes, Restaurants"
              onClick={clearPlaceholder}
            />
          </div>
          <div class="quote">
            <Quote />
          </div>
        </div>
        <div class="exploreCategory">
          <div class="exploreCategory-title">Explore By Category</div>
          <span>
            "Taste something different, healthy, home-cooked meals from
            passionate home cooks around you"
          </span>
        </div>
        <div class="categories">
          <div class="types">
            <img src="images jpg/landing/Category.png" alt="" />
            <br />
            <span>Veg</span>
          </div>
          <div class="types">
            <img src="images jpg/landing/Category.png" alt="" />
            <br />
            <span>Veg</span>
          </div>
          <div class="types ">
            <img src="images jpg/landing/Category.png" alt="" />
            <br />
            <span>Non Veg</span>
          </div>
          <div class="types">
            <img src="images jpg/landing/Category1.png" alt="" />
            <br />
            <span>Drinks</span>
          </div>
          <div class="types">
            <img src="images jpg/landing/Category1.png" alt="" />
            <br />
            <span>Jain</span>
          </div>
          <div class="types">
            <img src="images jpg/landing/Category1.png" alt="" />
            <br />
            <span>Jain</span>
          </div>
        </div>
        <br />
        <div class="exploreKitchen">
          <div class="exploreKitchen-title">Explore By Kitchen</div>
          <span>"Find out what's cooking around you!"</span>
        </div>
        <h1>Nearby Kitchens</h1>
        <div class="exploreKitchen-content">
          <div class="kitchen">
            <img
              src="images jpg/landing/MamaKitchen.png"
              alt=""
              class="kitchenImage"
            />
            <div class="kitchenName">Mama's kitchen</div>
            <img
              src="images jpg/Reviews/Rating.png"
              alt=""
              class="kitchenRating"
            />
            <div class="type">North Indian, Chinese</div>
            <div class="foodCost">Cost for 2: Rs.150</div>
            <div class="kitchenReviews">778 Reviews</div>
          </div>
        </div>
        <h1>Recommended Kitchens</h1>
        <div class="exploreKitchen-content">
          <div class="kitchen">
            <img
              src="images jpg/landing/MamaKitchen.png"
              alt=""
              class="kitchenImage"
            />
            <div class="kitchenName">Mama's kitchen</div>
            <img
              src="images jpg/Reviews/Rating.png"
              alt=""
              class="kitchenRating"
            />
            <div class="type">North Indian, Chinese</div>
            <div class="foodCost">Cost for 2: Rs.150</div>
            <div class="kitchenReviews">778 Reviews</div>
          </div>
        </div>
        <h1>Top picks</h1>
        <div class="exploreKitchen-content">
        <div class="kitchen">
            <img
              src="images jpg/landing/MamaKitchen.png"
              alt=""
              class="kitchenImage"
            />
            <div class="kitchenName">Mama's kitchen</div>
            <img
              src="images jpg/Reviews/Rating.png"
              alt=""
              class="kitchenRating"
            />
            <div class="type">North Indian, Chinese</div>
            <div class="foodCost">Cost for 2: Rs.150</div>
            <div class="kitchenReviews">778 Reviews</div>
          </div>

          <div class="kitchen">
            <img
              src="images jpg/landing/MamaKitchen.png"
              alt=""
              class="kitchenImage"
            />
            <div class="kitchenName">Mama's kitchen</div>
            <img
              src="images jpg/Reviews/Rating.png"
              alt=""
              class="kitchenRating"
            />
            <div class="type">North Indian, Chinese</div>
            <div class="foodCost">Cost for 2: Rs.150</div>
            <div class="kitchenReviews">778 Reviews</div>
          </div>

          <div class="kitchen">
            <img
              src="images jpg/landing/MamaKitchen.png"
              alt=""
              class="kitchenImage"
            />
            <div class="kitchenName">Mama's kitchen</div>
            <img
              src="images jpg/Reviews/Rating.png"
              alt=""
              class="kitchenRating"
            />
            <div class="type">North Indian, Chinese</div>
            <div class="foodCost">Cost for 2: Rs.150</div>
            <div class="kitchenReviews">778 Reviews</div>
          </div>
        </div>
        {/* kitchens done cook videos start */}
        <div class="cookVideos">
          <div class="cookVideos-title">Cooks Videos!</div>
          <span>"Happiness is.. surprising your mother by cooking supper"</span>
        </div>
        <div class="cookVideos-content">

{/* card1 */}
          <div class="card">
            <img src="images jpg/videoPic1.jpg" alt="" srcset="" />
            <div class="video-title">
              <h2>Paneer Butter Masala</h2>
            </div>
            <div class="desc">
              how to make a dhaba style paneer butter masala in 30 min{" "}
            </div>
            <div class="uploadDate">
              <h5>Uplaoded on : 24 Aug 2020</h5>
            </div>
          </div>
{/* card2 */}
          <div class="card">
            <img src="images jpg/videoPic1.jpg" alt="" srcset="" />
            <div class="video-title">
              <h2>Paneer Butter Masala</h2>
            </div>
            <div class="desc">
              how to make a dhaba style paneer butter masala in 30 min{" "}
            </div>
            <div class="uploadDate">
              <h5>Uplaoded on : 24 Aug 2020</h5>
            </div>
          </div>
{/* card3 */}
          <div class="card">
            <img src="images jpg/videoPic1.jpg" alt="" srcset="" />
            <div class="video-title">
              <h2>Paneer Butter Masala</h2>
            </div>
            <div class="desc">
              how to make a dhaba style paneer butter masala in 30 min{" "}
            </div>
            <div class="uploadDate">
              <h5>Uplaoded on : 24 Aug 2020</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const clearPlaceholder = () => {
  document.getElementById("mainbg-search").style.placeholder = "";
};

export { clearPlaceholder, Playground };
