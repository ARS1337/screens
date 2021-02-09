import React from "react";
import "../App.css";

function Quote(props) {
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
        <input
          type="text"
          class="pp"
          class="what-eat-input"
          id="enquiry_desc"
        
        />
        <div class="quote-price-label">
          <h3>...and quote your own price.</h3>
        </div>
        <div class="pay">
          <label>Pay:</label>
          <input
            type="number"
            placeholder="Minimum 100"
            size="11"
            id="wanna_pay"
            
          />
        </div>
        <div class="blank-input">
          <img src="images jpg/landing/people.png" alt="" />
          <input type="number" id="user_count"  />
        </div>
        <div class="radio">
          <ul class="select-type">
            {props.data.servingType.map((x) => {
              return (
                <li key={x.key}>
                  <input
                    type="radio"
                    value={x.key}
                    name="radio"
                    id={x.key}
                    checked
                  />
                  <label for={x.key}>{x.value}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="calendar-icon">
          <input type="date" class="date" id="delivery_on" min={new Date().toISOString().substr(0,10)} value={new Date().toISOString().substr(0,10)}  />
        </div>
      </div>
      <div class="quote-confirm">
        <button onClick={props.onClick}>PUKKAO</button>
      </div>
    </>
  );
}

export default Quote;
