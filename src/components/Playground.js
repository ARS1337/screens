import React, { Component } from "react";
import "../App.css";
import Quote from "./Quote";
import Reviews from "./Reviews";
import Recommended from "./Recommended";
import Videos from "./Videos";
import { Link, Route, Switch } from "react-router-dom";
import TestingRouter from "./TestingRouter";
import Card from "./Card";
import Kitchen from "./Kitchen";
import data from "../data.json";
import "fetch";
import { logDOM } from "@testing-library/react";
import Categories from "./Categories";
import Video from "./Video";

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      videoData: [],
      hotelsNearby: [],
      recommended: [],
      topPicks: [],
      token: "",
    };
    console.log("Constricrotr");
  }
  MasterDataURL =
    "https://staging.mypcot.com/Homefood/customergateway/getMasterData";
  VideoDataURL =
    "https://staging.mypcot.com/Homefood/customergateway/fetchHomeVideos";
  HotelsNearbyURL =
    "https://staging.mypcot.com/Homefood/customergateway/hotelsNearby";
  TopPicksURL =
    "https://staging.mypcot.com/Homefood/customergateway/homeTopPicks";
  LoginURL = "https://staging.mypcot.com/Homefood/customergateway/processLogin";
  RecommendedURL =
    "https://staging.mypcot.com/Homefood/customergateway/recommendedHotelAndBanner";

  // myHeaders = {
  //   Authorization: "Basic cml0ZXNoOnJpdGVzaFNpbmdo",
  //   Accept: "application/json",
  // };

  myHeaders = new Headers();

  mainInit = {
    method: "POST",
    headers: this.myHeaders,
    mode: "cors",
  };
  // mainHeaders = new Headers(this.mainInit);

  componentDidMount() {
    this.myHeaders.append("Authorization", "Basic cml0ZXNoOnJpdGVzaFNpbmdo");
    this.myHeaders.append("Accept", "application/json");

    this.getMasterData(this.MasterDataURL, this.mainInit, "categories");
    this.getVideoData(this.VideoDataURL, this.mainInit, "videoData");
    this.posSuccess(this.HotelsNearbyURL, "hotelsNearby");
    this.posSuccess(this.TopPicksURL, "topPicks");
    if (this.state.token.length > 0) {
      //logged in
      this.posSuccess(this.RecommendedURL, "recommended");
    }
  }

  getMasterData = (url) => {
    fetch(url, this.mainInit)
      .then((r) => r.json())
      .then((res) =>
        this.setState(
          {
            categories: res.getHomeFoodTypes,
          },
          console.log(" type state set")
        )
      );
  };

  getVideoData = (url) => {
    fetch(url, this.mainInit)
      .then((r) => r.json())
      .then((res) =>
        this.setState(
          {
            videoData: res.video_data,
          },
          console.log("video state set" + res.success)
        )
      );
  };

  handleLogin = () => {
    document.getElementById("login-container").style.display = "block";
    this.body = new FormData();

    this.id = document.getElementById("login-id").value;
    this.password = document.getElementById("login-password").value;

    this.body.append("phone_number", this.id);
    this.body.append("password", this.password);

    this.tempInit = this.mainInit;
    this.tempInit.body = this.body;

    fetch(
      "https://staging.mypcot.com/Homefood/customergateway/processLogin",
      this.tempInit
    )
      .then((r) => r.json())
      .then((res) => {
        this.setState({
          token: res.data[0].token,
        });
      })
      .then((res) => {
        this.posSuccess(this.RecommendedURL, "recommended");
        res = res;
      });
  };

  getcoords() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  posSuccess = (url, key) => {
    this.getcoords().then((position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });

      this.body = new FormData();
      this.body.append("latitude", position.coords.latitude);
      this.body.append("longitude", position.coords.longitude);
      if (key == "hotelsNearby") {
        this.body.append("page_limit", 3);
        this.body.append("limit", 0);
      }
      if (key == "recommended") {
        this.myHeaders.append("X-Access-Token", this.state.token);
      }

      this.tempInit = this.mainInit;
      this.tempInit.body = this.body;

      this.body = JSON.stringify(this.body);

      fetch(url, this.tempInit)
        .then((r) => r.json())
        .then((res) => {
          console.log(res);
          if (res.success > 0) {
            if (key == "hotelsNearby") {
              this.setState({
                [key]: res.near_by_hotels,
              });
            } else if (key == "topPicks") {
              res.data.pop();
              this.setState({
                [key]: res.data,
              });
            } else if (key == "recommended") {
              this.setState({
                [key]: res.recommended_arr,
              });
            }
          } else {
            alert(res.message + " and key is: " + key);
          }
        })
        .then((ress) => {
          ress = ress;
          console.log(this.state);
        });
    });
  };

  printState = () => {
    console.log(this.state);
  };

  render() {
    return (
      <>
        <div id="login-container">
          <div class="login-box" id="login-box">
            <h2>Login</h2>
            <input type="text" value="7977586379" id="login-id" />
            <br />
            <input type="text" value="123456" id="login-password" />
            <br />
            <button onClick={this.handleLogin}>Login</button>
          </div>
        </div>

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
              <label>Help</label>
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
              <button class="mainbg-search-icon">
                <img src="images jpg/landing/icon search.png" alt="" />
              </button>
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
            {this.state.categories.map((x) => {
              return <Categories data={x} />;
            })}
          </div>
          <br />
          <div class="exploreKitchen">
            <div class="exploreKitchen-title">Explore By Kitchen</div>
            <span>"Find out what's cooking around you!"</span>
          </div>
          <h1>Nearby Kitchens</h1>
          <div class="exploreKitchen-content">
            {this.state.hotelsNearby.map((x) => {
              return <Kitchen data={x} />;
            })}
          </div>

          <h1>Recommended</h1>
          <div class="exploreKitchen-content">
            {this.state.recommended.map((x) => {
              return <Kitchen data={x} />;
            })}
          </div>

          <h1>Top picks</h1>
          <div class="exploreKitchen-content">
            {this.state.topPicks.map((x) => {
              return <Kitchen data={x} />;
            })}
          </div>

          {/* kitchens done cook videos start */}
          <div class="cookVideos">
            <div class="cookVideos-title">Cooks Videos!</div>
            <span>
              "Happiness is.. surprising your mother by cooking supper"
            </span>
          </div>
          <div class="cookVideos-content">
            {this.state.videoData.map((x) => {
              return <Video data={x} />;
            })}
          </div>
          {/* footer  */}
          <div class="mainbg-footer">
            <div class="footer-title">
              <img src="images jpg/Footer/Title.png" alt="footer title" />
            </div>
            <div class="social">
              <img src="images jpg/Footer/Facebook.png" alt="" />
              <img src="images jpg/Footer/Youtube.png" alt="" />
              <img src="images jpg/Footer/Twitter.png" alt="" />
            </div>
            <span class="downloads">Downloads</span>
            <div class="google-apple">
              <img src="images jpg/Footer/GooglePlayBadge.png" alt="" />
              <img src="images jpg/Footer/AppStoreBadge.png" alt="" />
            </div>
            <div class="footer-links">
              <a href="#" class="CompanyLink">
                Company
              </a>
              <a href="#" class="AboutusLink">
                About us
              </a>
              <a href="#" class="TnCLink">
                Terms and Conditions
              </a>
              <a href="#" class="ContactusLink">
                Contact Us
              </a>
              <a href="#" class="PrivacyPolicyLink">
                Privacy Policy
              </a>
              <a href="#" class="FaqsLink">
                FAQs
              </a>
            </div>

            <hr class="line" />
            <span class="last-line">
              By Continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of respective owners. 2008-2020 © All rights
              reserved.
            </span>
          </div>
        </div>
      </>
    );
  }
}
const clearPlaceholder = () => {
  document.getElementById("mainbg-search").style.placeholder = "";
};

export { clearPlaceholder, Playground };
