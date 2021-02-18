import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FuncPlayground, { getData, getcoords } from "./FuncPlayground";
import { fetchToken, clearToken } from "./StoreAndSlices/HandleLogin";
import { fetchPosRelData } from "./StoreAndSlices/PosRelData";

function Login(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  console.log("restieved token is " + token);
  return (
    <>
      <div id="login-container">
        <div className="login-box" id="login-box">
          <h2>Login</h2>
          <input type="text" defaultValue="7977586379" id="login-id" />
          <br />
          <input type="text" defaultValue="123456" id="login-password" />
          <br />
          {returnLogInOut(props, dispatch, token)}
        </div>
      </div>
      {console.log("login")}
    </>
  );
}

let getCred = (props) => {
  document.getElementById("login-container").style.display = "none";
  let body = new FormData();

  let id = document.getElementById("login-id").value;
  let password = document.getElementById("login-password").value;

  body.append("phone_number", id);
  body.append("password", password);

  let tempInit;
  tempInit = props.data;
  tempInit.body = body;
  let myheaders = new Headers();
  myheaders.append("Accept", "application/json");
  myheaders.append("Authorization", "Basic cml0ZXNoOnJpdGVzaFNpbmdo");
  tempInit.headers = myheaders;
  return tempInit;
};
let myheaders = new Headers();
myheaders.append("Accept", "application/json");
myheaders.append("Authorization", "Basic cml0ZXNoOnJpdGVzaFNpbmdo");

let mainInit = {
  method: "POST",
  headers: myheaders,
  mode: "cors",
};
let urls = {
  MasterDataURL:
    "https://staging.mypcot.com/Homefood/customergateway/getMasterData",
  VideoDataURL:
    "https://staging.mypcot.com/Homefood/customergateway/fetchHomeVideos",
  HotelsNearbyURL:
    "https://staging.mypcot.com/Homefood/customergateway/hotelsNearby",
  TopPicksURL:
    "https://staging.mypcot.com/Homefood/customergateway/homeTopPicks",
  LoginURL: "https://staging.mypcot.com/Homefood/customergateway/processLogin",
  RecommendedURL:
    "https://staging.mypcot.com/Homefood/customergateway/recommendedHotelAndBanner",
  EnquiriesURL:
    "https://staging.mypcot.com/Homefood/customergateway/saveEnquires",
  mainInit: mainInit,
};
let returnLogInOut = (props, dispatch, token) => {
  myheaders.delete("X-Access-Token");
  myheaders.set("X-Access-Token", token);
  console.log("token send is "+token);
  return (
    <button
      onClick={() => {
        dispatch(
          fetchToken([
            "https://staging.mypcot.com/Homefood/customergateway/processLogin",
            getCred(props),
          ])
        ).then((r) => {
          getData(
            mainInit,
            myheaders,
            "recommended",
            urls.RecommendedURL,
            dispatch,
            token
          );
        });
      }}
    >
      Login
    </button>
  );
};
export default Login;
