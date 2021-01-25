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
      <div class="search-box" id="search-box">
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
          id="search"
            type="text"
            class="search"
            placeholder="Search for dishes, Restaurants"
            onClick={clearPlaceholder}
          />
        </div>
        <div class="vl2"/>
        <div class="search-box-right">
          <button onClick={red} class="search-btn">
          <img src="images jpg/title/Icon search.png" />
          </button>
        </div>
      </div>
      <div class="help" id="help">
        <img src="images jpg/title/Warning.png" />
        <p>Help</p>
      </div>

      <div class="user-login">
        <img src="images jpg/title/Profile.png" alt="" />
        <p>Siddhu</p>
      </div>
    </>
  );
}
const red=()=>{
  // document.getElementById("help").style.backgroundColor ="yellow";
}
const clearPlaceholder=()=>{
  document.getElementById("search").style.placeholder="";
}

export {Title, red, clearPlaceholder};
