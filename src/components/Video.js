import React from "react";

function Video(props) {
  return (
    <>
      <div class="card" key={props.data.video_id}>
         <video controls src={props.data.video_path} height="inherit" width="inherit"/>
        <div class="video-title">
          <h2>{props.data.title}</h2>
        </div>
        <div class="desc">
           {props.data.description}
        </div>
        <div class="name-upload-date">
          <div class="kitchen-name">{props.data.hotel_name}</div>
          <div class="uploadDate">
            <h5>Uploaded on: {(props.data.created_on).substr(0,10)}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
