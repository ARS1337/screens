import React, { Component } from "react";
import Video from "./Video";

export class Detch extends Component {
  MasterDataURL =
    "https://staging.mypcot.com/Homefood/customergateway/getMasterData";
  VideoDataURL =
    "https://staging.mypcot.com/Homefood/customergateway/fetchHomeVideos";

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
    };
    console.log("Constricrotr");
  }
  componentDidMount() {
    console.log("Component did mounddddd");
    this.getMasterData(this.MasterDataURL, this.mainInit);
    this.getVideoData(this.VideoDataURL, this.mainInit);
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
  render() {
    return (
      <>
        {/* <div class="cookVideos-content">
          {this.state.videoData.map((x) => {
            return <Video data={x} />;
          })}
        </div> */}
        <p>
        {/* {Object.keys(console.log(this.state.videoData))} */}
        </p>
        ggnoob
      </>
    );
  }
}

export default Detch;
