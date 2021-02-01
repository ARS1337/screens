import React from "react";
import "../App.css";
import {useState} from "react"

function Quote() {
  return (
    <>
      <div class="highlight-above-quote">
        <span>let us know what you</span>
        <br />
        <span>want to eat...</span>
      </div>
      <div class="quote-price">
          <h3 class="what-eat">What would you like to eat...</h3>
        <div class="search-icon">
          <img src="images jpg/landing/Icon search.png" />
        </div>
          <input type="text" class="pp" class="what-eat-input"/>
        <div class="quote-price-label">
          <h3>...and quote your own price.</h3>
        </div>
        <div class="pay">
          <label>Pay:</label>
          <input type="number" placeholder="Minimum 100" size="11"/>
        </div>
        <div class="blank-input">
          <img src="images jpg/landing/people.png" alt=""/>
          <input type="number" />
        </div>
        <div class="radio">
          <ul class="select-type">
            <li>
              <input type="radio" value="1" name="radio" id="Breakfast" />
              <label for="Breakfast">Breakfast</label>
            </li>
            <li>
              <input type="radio" value="2" name="radio" id="Lunch" />
              <label for="Lunch">Lunch</label>
            </li>
            <li>
              <input type="radio" value="3" name="radio" id="Dinner" />
              <label for="Dinner">Dinner</label>
            </li>
          </ul>
        </div>
        {/* <div class="date">{new Date().toDateString().substr(3,12)}</div> */}
        <div class="calendar-icon">
          <input type="date" class="date" />
          {/* <img src="images jpg/landing/date-range.png" alt="" /> */}
        </div>
      </div>
      <div class="quote-confirm">
        <button value="Confirm">CONFIRM</button>
      </div>
    </>
  );
}

export default Quote;
