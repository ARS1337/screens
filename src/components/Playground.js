import React, { useState } from "react";
import "../App.css";
import Quote from "./Quote";
import Kitchen from "./Kitchen";
import Categories from "./Categories";
import Video from "./Video";
import RecommendedNew from "./RecommendedNew";
import Login, { returnLogInOut } from "./Login";
import MainFooter from "./MainFooter";
import FuncPlayground from "./FuncPlayground";
import LoginMainPgBtn from "./LoginMainPgBtn";
import LoaderAnim from './LoaderAnim';
import { useSelector } from 'react-redux';

export function Playground() {
  let [container, makeVisible] = useState(false);

  let urls = {
    MasterDataURL:
      "https://staging.mypcot.com/Homefood/customergateway/getMasterData",
    VideoDataURL:
      "https://staging.mypcot.com/Homefood/customergateway/fetchHomeVideos",
    HotelsNearbyURL:
      "https://staging.mypcot.com/Homefood/customergateway/hotelsNearby",
    TopPicksURL:
      "https://staging.mypcot.com/Homefood/customergateway/homeTopPicks",
    LoginURL:
      "https://staging.mypcot.com/Homefood/customergateway/processLogin",
    RecommendedURL:
      "https://staging.mypcot.com/Homefood/customergateway/recommendedHotelAndBanner",
    EnquiriesURL:
      "https://staging.mypcot.com/Homefood/customergateway/saveEnquires",
  };


  return (
    <>
      <FuncPlayground data={urls} />
      <Login
        data={[container, urls.RecommendedURL]}
        onClick={() => {
          makeVisible((container = false));
        }}
      />
    <div class="loader-container">
      <LoaderAnim />
    </div>

      <div class="mainbg">
        <div class="mainbg-title">
          <div class="main-location">
            <div class="search-box-left">
              <img src="images jpg/title/location-marker.png" />
              <select
                id="cars"
                name="cars"
                class="location-list"
                defaultValue="Mumbai"
              >
                <option value="Mumbai">Mumbai</option>
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
            <label>Help</label>
          </div>

          <div class="user-login">
            <LoginMainPgBtn
              onClick={() => {
                makeVisible((container = true));
              }}
            />
          </div>

          <div class="signup">
            <label>Signup</label>
          </div>
          <div class="mainbg-search">
            <input
              type="text"
              id="mainbg-search"
              placeholder="Search for dishes, Restaurants"
            />
            <button class="mainbg-search-icon">
              <img src="images jpg/landing/icon search.png" alt="" />
            </button>
          </div>
          <div class="quote">
            <Quote data={urls.EnquiriesURL} />
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
          <Categories />
        </div>
      </div>
      <br />

      <div class="exploreKitchen">
        <div class="exploreKitchen-title">Explore By Kitchen</div>
        <span>"Find out what's cooking around you!"</span>
      </div>

      {() => {
        if (this.state.nearbyKitchens != 0) {
          <h1>Nearby Kitchens</h1>;
        }
      }}
      <div class="exploreKitchen-content">
        <Kitchen data="hotelsNearby" />
      </div>

      <RecommendedNew />

      <h1>Top picks</h1>
      <div class="exploreKitchen-content">
        <Kitchen data="topPicks" />
      </div>

      <div class="cookVideos">
        <div class="cookVideos-title">Cooks Videos!</div>
        <span>"Happiness is.. surprising your mother by cooking supper"</span>
      </div>
      <div class="cookVideos-content">
        <Video />
      </div>
      <MainFooter />
    </>
  );
}

