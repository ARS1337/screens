import React from "react";
import "../App.css";
import fetch from "fetch";

function Quote(props) {
  console.log("Quote.....");
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
          <input type="number" id="user_count" />
        </div>
        <div class="radio">
          <ul class="select-type">
            {props.data.servingType.map((x) => {
              return (
                <li key={x.key}>
                  <input
                    type="radio"
                    value={x.value}
                    name="radio"
                    id={x.value}
                  />
                  <label for={x.value}>{x.value}</label>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div class="date">{new Date().toDateString().substr(3,12)}</div> */}
        <div class="calendar-icon">
          <input type="date" class="date" id="delivery_on" />
        </div>
      </div>
      <div class="quote-confirm">
        <button onClick={sendEnquiry}>PUKKAO</button>
      </div>
    </>
  );
}

export const sendEnquiry = (props) => {
  console.log("sendEnquiry");
  console.log(props);
  // let body = new FormData();
  // [
  //   "enquiry_desc",
  //   "wanna_pay",
  //   "user_count",
  //   "delivery_on",
  // ].map((x) => {
  //   body.append(x, document.getElementById(x).value);
  // });
  // body.append("latitude",props.data.latitude);
  // body.append("longitude",props.data.longitude);
  // body.append("serving_type",document.querySelector('input[name="radio"]:checked').value);

  // console.log("Quote body is ");
  // console.log(body);
};

export default Quote;
