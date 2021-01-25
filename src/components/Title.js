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
      <div class="company-name">
        <img src="images jpg/title/logo white.png" />
      </div>
      <div class="search-box">
        <div class="search-box-left">
          <img src="images jpg/title/location-marker.png" />
          <select id="cars" name="cars" class="location-list">
            <option value="volvo" selected>
              Volvo
            </option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div class="vl1"/>
        <div class="search-box-center">
          <input
            type="text"
            class="search"
            value="Search for dishes, Restaurants"
          />
        </div>
        <div class="vl2"/>
        <div class="search-box-right">
          <img src="images jpg/title/Icon search.png" />
        </div>
      </div>
      <div class="help">
        <img src="images jpg/title/Warning.png" />
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
