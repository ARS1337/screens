import React from "react";
import "../App.css";
import { SendEnquiry } from "../components/StoreAndSlices/SendEnquiry";
import { useDispatch, useSelector } from "react-redux";

function Quote(props) {
  const dispatch = useDispatch();
  let servingType = useSelector((state) => state.masterData.servingType);
  const token = useSelector((state) => state.token.token);

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
          <img src="images jpg/landing/Icon search.png" alt="serach icon" />
        </div>
        <input type="text" class="pp what-eat-input" id="enquiry_desc" />
        <div class="quote-price-label">
          <h3>...and quote your own price.</h3>
        </div>
        <div class="pay">
          <label>Pay:</label>
          <input
            type="number"
            placeholder="Min. 100/person"
            size="11"
            id="wanna_pay"
          />
        </div>
        <div class="blank-input">
          <img src="images jpg/landing/people.png" alt="" />
          <input type="number" id="user_count" min="1" />
        </div>
        <div class="radio">
          <ul class="select-type">
            {servingType.map((x) => {
              return (
                <li key={x.key}>
                  <input
                    type="radio"
                    defaultValue={x.key}
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
          <input
            type="date"
            class="date"
            id="delivery_on"
            min={new Date().toISOString().substr(0, 10)}
            defaultValue={new Date().toISOString().substr(0, 10)}
          />
        </div>
      </div>
      <div class="quote-confirm">
        <button
          onClick={() => {
            sendEnquiry(dispatch, props,token);
          }}
        >
          PUKKAO
        </button>
      </div>
      {/* <SendEnquiryBtn data={props.data}/> */}
      {console.log("Quote")}
    </>
  );
}

function getcoords() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

let sendEnquiry = (dispatch, props,token) => {
  getcoords().then((position) => {
    console.log("sendEnquiry");
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Basic cml0ZXNoOnJpdGVzaFNpbmdo");
    myHeaders.set("X-Access-Token", token);

    let mainInit = {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
    };
    let body = new FormData();

    let quoteVars = ["enquiry_desc", "wanna_pay", "user_count", "delivery_on"];
    quoteVars.forEach((x) => {
      body.append(x, document.getElementById(x).value);
    });

    body.append("latitude", position.coords.latitude);
    body.append("longitude", position.coords.longitude);
    body.append(
      "serving_type",
      document.querySelector('input[name="radio"]:checked').value
    );

    let tempInit = mainInit;
    tempInit.body = body;
    body = JSON.stringify(body);
    dispatch(SendEnquiry([props.data, tempInit]));
    // fetch(this.EnquiriesURL, this.tempInit)
    //   .then((r) => r.json())
    //   .then((res) => {
    //     console.log(res);
    //     res.success == "1"
    //       ? alert("enquiry sent successfully!")
    //       : alert("enquiry failed!");
    //   });
  });
};

export default Quote;
