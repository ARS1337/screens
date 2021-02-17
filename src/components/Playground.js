import React, { Component } from "react";
import "../App.css";
import Quote from "./Quote";
import Kitchen from "./Kitchen";
import Categories from "./Categories";
import Video from "./Video";
import RecommendedNew from "./RecommendedNew";
import Login from "./Login";
import MainFooter from "./MainFooter";
import { fetchMasterData } from './StoreAndSlices/MasterFetch';

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      servingType: [],
      videoData: [],
      hotelsNearby: [],
      recommended: [],
      topPicks: [],
      token: "",
      nearbyKitchens: 0,
    };
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
  EnquiriesURL =
    "https://staging.mypcot.com/Homefood/customergateway/saveEnquires";

  myHeaders = new Headers();

  mainInit = {
    method: "POST",
    headers: this.myHeaders,
    mode: "cors",
  };

  componentDidMount() {
    this.myHeaders.append("Authorization", "Basic cml0ZXNoOnJpdGVzaFNpbmdo");
    this.myHeaders.append("Accept", "application/json");

    // dispatch(fetchMasterData(this.MasterDataURL,this.mainInit));
    this.getMasterData(this.MasterDataURL, this.mainInit, "categories");
    this.getVideoData(this.VideoDataURL, this.mainInit, "videoData");
    this.posSuccess(this.HotelsNearbyURL, "hotelsNearby");
    this.posSuccess(this.TopPicksURL, "topPicks");
    if (this.state.token !== "") {
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
            servingType: res.getMenusServingType,
          },
          console.log(" type state set")
        )
      );
  };

  getVideoData = (url) => {
    fetch(url, this.mainInit)
      .then((r) => r.json())
      .then((res) => {
        res.video_data.pop();
        res.video_data.pop();
        this.setState(
          {
            videoData: res.video_data,
          },
          console.log("video state set" + res.success)
        );
      });
  };

  handleLogin = () => {
    document.getElementById("login-container").style.display = "none";
    let body = new FormData();

    let id = document.getElementById("login-id").value;
    let password = document.getElementById("login-password").value;

    body.append("phone_number", id);
    body.append("password", password);

    let tempInit = this.mainInit;
    tempInit.body = body;

    fetch(
      "https://staging.mypcot.com/Homefood/customergateway/processLogin",
      tempInit
    )
      .then((r) => r.json())
      .then((res) => {
        if (res.success != 0) {
          alert(res.message);
          this.setState({
            token: res.data[0].token,
          });
        }
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

      let body = new FormData();
      body.append("latitude", position.coords.latitude);
      body.append("longitude", position.coords.longitude);

      if (key == "hotelsNearby") {
        body.append("page_limit", 3);
        body.append("limit", 0);
      }
      if (key == "recommended") {
        this.myHeaders.append("X-Access-Token", this.state.token);
      }

      let tempInit = this.mainInit;
      tempInit.body = body;

      body = JSON.stringify(body);

      fetch(url, tempInit)
        .then((r) => r.json())
        .then((res) => {
          console.log(res);
          console.log("token is " + this.state.token);
          if (res.success == 1) {
            if (key == "hotelsNearby") {
              this.setState({
                [key]: res.near_by_hotels,
                nearbyKitchens: 1,
              });
            } else if (key == "topPicks") {
              this.setState({
                [key]: res.data,
              });
            } else if (key == "recommended") {
              this.setState({
                [key]: res.recommended_arr,
              });
            }
          } else {
            if (key == "hotelsNearby") {
              this.setState({
                nearbyKitchens: 0,
              });
            }
          }
        });
    });
  };

  printState = () => {
    console.log(this.state);
  };

  loginBoxDisplay = () => {
    document.getElementById("login-container").style.display = "block";
  };

  clearToken = () => {
    this.setState(
      {
        token: "",
      },
      console.log(this.state.token)
    );
  };

  returnLogInOut() {
    if (this.state.token == "") {
      return <label onClick={this.loginBoxDisplay}>Login</label>;
    } else {
      return <label onClick={this.clearToken}>Logout</label>;
    }
  }

  sendEnquiry = () => {
    this.getcoords().then((position) => {
      console.log("sendEnquiry");
      let body = new FormData();

      let quoteVars = [
        "enquiry_desc",
        "wanna_pay",
        "user_count",
        "delivery_on",
      ];
      quoteVars.forEach((x) => {
        body.append(x, document.getElementById(x).value);
      });

      body.append("latitude", position.coords.latitude);
      body.append("longitude", position.coords.longitude);
      body.append(
        "serving_type",
        document.querySelector('input[name="radio"]:checked').value
      );

      this.tempInit = this.mainInit;
      this.tempInit.body = body;
      body = JSON.stringify(body);

      fetch(this.EnquiriesURL, this.tempInit)
        .then((r) => r.json())
        .then((res) => {
          console.log(res);
          res.success == "1"
            ? alert("enquiry sent successfully!")
            : alert("enquiry failed!");
        });
    });
  };

  render() {
    return (
      <>
        {console.log("Playgroun")}
        <Login
          onClick={() => {
            this.handleLogin();
          }}
        />

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

            <div class="user-login">{this.returnLogInOut()}</div>

            <div class="signup">
              <label>Signup</label>
            </div>
            <div class="mainbg-search">
              <input
                type="text"
                id="mainbg-search"
                defaultValue="Search for dishes, Restaurants"
                onClick={clearPlaceholder}
              />
              <button class="mainbg-search-icon">
                <img src="images jpg/landing/icon search.png" alt="" />
              </button>
            </div>
            <div class="quote">
              <Quote data={this.state} onClick={this.sendEnquiry} />
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

          {() => {
            if (this.state.nearbyKitchens != 0) {
              <h1>Nearby Kitchens</h1>;
            }
          }}
          <div class="exploreKitchen-content">
            {this.state.hotelsNearby.slice(0, 3).map((x) => {
              return <Kitchen data={x} />;
            })}
          </div>

          <RecommendedNew data={this.state} />

          <h1>Top picks</h1>
          <div class="exploreKitchen-content">
            {this.state.topPicks.slice(0, 3).map((x) => {
              return <Kitchen data={x} />;
            })}
          </div>

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
          {/* <div class="videos-btn">
            <button class="videos-btn-left">{"<"}</button>
            <button class="videos-btn-right">{">"}</button>
          </div>
          <br /> */}

          <MainFooter />
        </div>
      </>
    );
  }
}
const clearPlaceholder = () => {
  document.getElementById("mainbg-search").value = "";
};

export { clearPlaceholder, Playground };
