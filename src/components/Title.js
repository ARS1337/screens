import React from "react";
// import styles from '../screen4.css';
import "../App.css";

function Title() {
  return (
    <>
      {/* <div class="title"> */}
      <div class="logo">
      <img src="images jpg/title/pukkao_final-2.png" />
      </div>
      <div class="company-name" >
      <img src="images jpg/title/logo white.png" />
      </div>
      <div class="search-box">
          <input type="text" class="search"/>
          </div>
      <div class="help">
        <img src="images jpg/title/Warning.png"  />
        <p>Help</p>
      </div>

      <div class="user-login">
        <img src="images jpg/title/Profile.png" alt="" />
        <p>Siddhu</p>
      </div>

      {/* </div> */}
    </>
  );
}

export default Title;
