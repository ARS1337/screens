import React from "react";
// import styles from '../screen4.css';
import "../App.css";

function Title() {
  return (
    <>
      {/* <div class="title"> */}
      <img src="images jpg/title/pukkao_final-2.png" class="logo" width="72" height="69"/>
      <div class="company-name" >
      <img src="images jpg/title/logo white.png" width="250" height="34"/>
      </div>
      <div class="search-box">
          <input type="text"/>
          </div>
      <div class="help">
        <img src="images jpg/title/Warning.png"  />
        <h2>Help</h2>
      </div>

      <div class="user-login">
        <img src="images jpg/title/Profile.png" alt="" />
        <h4>Siddhu</h4>
      </div>

      {/* </div> */}
    </>
  );
}

export default Title;
