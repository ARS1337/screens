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
  let [container, setContainer] = useState(false);
  let nearbyKitchens = useSelector(state => state.otherData.nearbyKitchens);
  let LocationStatus = useSelector(state => state.Location.doneLoading);
  let [LoginMessage, setLoginMessage] = useState(true);
  const status = useSelector((state) => state.token.doneLoading);
  const message = useSelector((state) => state.token.message);
  let urls = {
    MasterDataURL:
      "/getMasterData",
    VideoDataURL:
      "/fetchHomeVideos",
    HotelsNearbyURL:
      "/hotelsNearby",
    TopPicksURL:
      "/homeTopPicks",
    LoginURL:
      "/processLogin",
    RecommendedURL:
      "/recommendedHotelAndBanner",
    EnquiriesURL:
      "/saveEnquires",
  };

  // Removed urls from Playground.js, left the nessasary last part.
  // app doesnt crashes now without location, 2 apis(enquiry,hotelsNearby) required location.
  
  return (
    <>
      <FuncPlayground data={urls} />
      <Login
        data={[container, urls.RecommendedURL,()=>setContainer(container=false)]}
        onClick={() => {
          // setContainer((container = false));
          setLoginMessage(LoginMessage=true);
          setTimeout(() => {
            setLoginMessage(LoginMessage = false);
          }, 5000)
        }}
      />
        {LoginMessage
          ? showMessage(status, message, LoginMessage, setLoginMessage)
          : null}
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
                setContainer((container = true));
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

      {(() => {
        if (nearbyKitchens != 0) {
          return (<>
            <h1>Nearby Kitchens</h1>
            <div class="exploreKitchen-content">
              <Kitchen data="hotelsNearby" />
            </div>
          </>
          )
        } else if (LocationStatus == "rejected" | LocationStatus == "pending") {
          console.log("no location gven fo enaereyb jotrels");
          return <label style={{"text-align":"center","font-size":"18px"}}>Please allow location to get nearby hotels</label>;
        }
      })()}



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
let showMessage = (status, message, LoginMessage, setLoginMessage) => {
  if (status == "pending") {
    return (
      <div class="message message-gray LoginMessage">
        <label>Logging in...</label>
        <button
          onClick={() => {
            setLoginMessage((LoginMessage = false));
          }}
        >
          X
        </button>
      </div>
    );
  } else if (status == "rejected") {
    return (
      <div class="message message-red LoginMessage">
        <label>{message}</label>
        <button
          onClick={() => {
            setLoginMessage((LoginMessage = false));
          }}
        >
          X
        </button>
      </div>
    );
  } else if (status == "fulfilled") {
    return (
      <div class="message message-green LoginMessage">
        <label>{message}</label>
        <button
          onClick={() => {
            console.log("setLoginMessage is " + LoginMessage);
            setLoginMessage((LoginMessage = false));
            console.log("setLoginMessage is " + LoginMessage);
          }}
        >
          X
        </button>
      </div>
    );
  } else {
    return <></>;
  }
};

