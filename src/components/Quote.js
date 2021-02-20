import React from "react";
import "../App.css";
import {
  SendEnquiry,
  setEnquiryDetails,
} from "../components/StoreAndSlices/SendEnquiry";
import { useDispatch, useSelector } from "react-redux";

function Quote(props) {
  const dispatch = useDispatch();
  let servingType = useSelector((state) => state.masterData.servingType);
  const token = useSelector((state) => state.token.token);
  let temp = useSelector((state) => state.Enquiries);
  console.log(temp);
  let data={...temp}
  data["latitude"] = useSelector((state) => state.Location.latitude);
  data["longitude"] = useSelector((state) => state.Location.longitude);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendEnquiry(dispatch, props, token, data);
      }}
    >
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

        <input
          type="text"
          class="pp what-eat-input"
          id="enquiry_desc"
          value={useSelector((state) => state.Enquiries.enquiry_desc)}
          onChange={(event) => {
            handleChange(event, dispatch);
          }}
        />
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
            value={useSelector((state) => state.Enquiries.wanna_pay)}
            onChange={(event) => {
              handleChange(event, dispatch);
            }}
          />
        </div>
        <div class="blank-input">
          <img src="images jpg/landing/people.png" alt="" />
          <input
            type="number"
            id="user_count"
            min="1"
            value={useSelector((state) => state.Enquiries.user_count)}
            onChange={(event) => {
              handleChange(event, dispatch);
            }}
          />
        </div>
        <div class="radio">
          <ul
            class="select-type"
            value={useSelector((state) => state.Enquiries.serving_type)}
          >
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
                  <label
                    for={x.key}
                    id="serving_type"
                    value={x.key}
                    onClick={(event) => {
                      handleChange(
                        (event = {
                          target: { id: "serving_type", value: x.key },
                        }),
                        dispatch
                      );
                    }}
                  >
                    {x.value}
                  </label>
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
            value={useSelector((state) => state.Enquiries.delivery_on)}
            onChange={(event) => {
              handleChange(event, dispatch);
            }}
          />
        </div>
      </div>
      <div class="quote-confirm">
        <button type="submit">PUKKAO</button>
      </div>
      {console.log("Quote")}
    </form>
  );
}
let handleChange = (event, dispatch) => {
  dispatch(
    setEnquiryDetails({ key: event.target.id, value: event.target.value })
  );
};
function getcoords() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

let sendEnquiry = (dispatch, props, token, data) => {
  // getcoords().then((position) => {
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

  // data.map((x) => {
  //   body.append(
  //     x,
  //     useSelector((state) => state.Enquiries[x])
  //   );
  // });
  Object.keys(data).map((x) => {
    body.append(x, data[x]);
  });

  // body.append(
  //   "latitude",
  //   useSelector((state) => state.Location.latitude)
  // );
  // body.append(
  //   "longitude",
  //   useSelector((state) => state.Location.longitude)
  // );

  let tempInit = mainInit;
  tempInit.body = body;
  body = JSON.stringify(body);
  dispatch(SendEnquiry([props.data, tempInit]));
  // });
};

export default Quote;
