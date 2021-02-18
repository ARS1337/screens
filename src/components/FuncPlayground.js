import React from "react";
import { useDispatch } from "react-redux";
import { fetchMasterData } from "./StoreAndSlices/MasterFetch";
import { useEffect } from "react";
import { fetchPosRelData } from "./StoreAndSlices/PosRelData";
import { VideoFetch } from "./StoreAndSlices/VideoFetch";

function FuncPlayground(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    let myheaders = new Headers();
    myheaders.append("Accept", "application/json");
    myheaders.append("Authorization", "Basic cml0ZXNoOnJpdGVzaFNpbmdo");
    let mainInit = {
      method: "POST",
      headers: myheaders,
      mode: "cors",
    };
    dispatch(fetchMasterData([props.data.MasterDataURL, mainInit]));
    dispatch(VideoFetch([props.data.VideoDataURL, mainInit]));
    getData(mainInit, myheaders, "topPicks", props.data.TopPicksURL, dispatch);
    getData(
      mainInit,
      myheaders,
      "hotelsNearby",
      props.data.HotelsNearbyURL,
      dispatch
    );
  }, []);
  return <></>;
}

function getcoords() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function getData(mainInit, myheaders, key, url, dispatch, token) {
  getcoords().then((position) => {
    let body = new FormData();
    body.append("latitude", position.coords.latitude);
    body.append("longitude", position.coords.longitude);

    if (key == "hotelsNearby") {
      body.append("page_limit", 3);
      body.append("limit", 0);
    }
    console.log("recommendeded token is " + token);

    let tempInit = mainInit;
    tempInit.headers = myheaders;
    tempInit.body = body;

    body = JSON.stringify(body);
    dispatch(fetchPosRelData([url, tempInit, key]));
  });
}
export { getData, getcoords };
export default FuncPlayground;
