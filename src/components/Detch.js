import React, { Component } from "react";
import Video from "./Video";

export class Detch extends Component {
  MasterDataURL =
    "https://staging.mypcot.com/Homefood/customergateway/getMasterData";
  VideoDataURL =
    "https://staging.mypcot.com/Homefood/customergateway/fetchHomeVideos";
  HotelsNearbyURL =
    "https://staging.mypcot.com/Homefood/customergateway/hotelsNearby";
  TopPicksURL =
    "https://staging.mypcot.com/Homefood/customergateway/homeTopPick";

  myHeaders = {
    Accept: "application/json",
  };

  mainInit = {
    method: "POST",
    headers: this.myHeaders,
    mode: "cors",
  };
  mainHeaders = new Headers(this.mainInit);

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      videoData: [],
      hotelsNearby: [],
      topPicks: [],
    };
    console.log("Constricrotr");
  }
  componentDidMount() {
    console.log("Component did mounddddd");
    this.getMasterData(this.MasterDataURL, this.mainInit);
    this.getVideoData(this.VideoDataURL, this.mainInit);
    this.posSuccess(this.HotelsNearbyURL, "hotelsNearby");
    this.posSuccess(this.TopPicksURL, "topPicks");
  }
  getMasterData = (url) => {
    fetch(url, this.mainInit)
      .then((r) => r.json())
      .then((res) =>
        this.setState(
          {
            categories: res.getHomeFoodTypes,
          },
          console.log("type state set")
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
  getcoords() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  posSuccess = (url, key) => {
    console.log("possuccess");
    this.getcoords().then((position) => {
      this.body = new FormData();
      this.body.append("latitude", position.coords.latitude);
      this.body.append("longitude", position.coords.longitude);
      this.body.append("page_limit", 3);
      this.body.append("limit", 0);

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
              this.setState({
                [key]: res.data,
              });
            }
          } else {
            alert(res.message);
          }
        })
        .then(ress=>console.log(this.state))
    });
  };

  render() {
    return (
      <>
        <p></p>
        ggnoob
      </>
    );
  }
}

export default Detch;


