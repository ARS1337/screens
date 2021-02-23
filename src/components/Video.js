import React from "react";
import { useSelector } from "react-redux";

function Video() {
  let videos = useSelector((state) => state.video.videoData[0]);
  let doneLoading = useSelector(state => state.video.doneLoading);
  if(doneLoading=="pending"){
    return <div class="loader"></div>
  }else if(doneLoading=="rejected"){
    return <div>couldn't load data</div>
  }else{
    return videos.slice(0,3).map((x) => {
      return (
        <>
          <div class="card" key={x.video_id}>
            <video
              controls
              src={x.video_path}
              height="inherit"
              width="inherit"
            />
            <div class="video-title">
              <h2>{x.title}</h2>
            </div>
            <div class="desc">{x.description}</div>
            <div class="name-upload-date">
              <div class="kitchen-name">{x.hotel_name}</div>
              <div class="uploadDate">
                <h5>Uploaded on: {x.created_on.substr(0, 10)}</h5>
              </div>
            </div>
          </div>
        </>
      );
    });
  }
}

export default Video;
