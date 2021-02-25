import React, { useState } from "react";
import "../App.css";
import { SendEnquiry } from "../components/StoreAndSlices/SendEnquiry";
import { useDispatch, useSelector } from "react-redux";
import {fetchLocation} from "./StoreAndSlices/Location";

function Quote(props) {
  const dispatch = useDispatch();
  let servingType = useSelector((state) => state.masterData.servingType);
  const token = useSelector((state) => state.token.token);
  let latitude = useSelector((state) => state.Location.latitude);
  let longitude = useSelector((state) => state.Location.longitude);
  let LocationStatus = useSelector(state => state.Location.doneLoading);
  let [enquiry_desc, setEnquiryDesc] = useState("");
  let [wanna_pay, setWannaPay] = useState("");
  let [delivery_on, setDeliveryDate] = useState("");
  let [user_count, setUserCount] = useState("");
  let [serving_type, setServingType] = useState("");
  let message = useSelector((state) => state.Enquiries.message);
  let status = useSelector((state) => state.Enquiries.doneLoading);
  let [quoteResponse, setQuoteResponse] = useState(true);
  setTimeout(()=>{
    setQuoteResponse(quoteResponse=false);
  },5000)
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setQuoteResponse(quoteResponse = true);
        if (LocationStatus == "fulfilled") {
          dispatch(
            SendEnquiry([
              props.data,
              { "X-Access-Token": token },
              {
                latitude: latitude,
                longitude: longitude,
                enquiry_desc: enquiry_desc,
                wanna_pay: wanna_pay,
                delivery_on: delivery_on,
                user_count: user_count,
                serving_type: serving_type,
              },
            ])
          );
        } else {
          alert("Please allow location access to make an enquiry!");
          // dispatch(fetchLocation());
        }
      }}
    >
      {console.log("quote")}
      {console.log(quoteResponse)}
      {quoteResponse ? showMessage(setQuoteResponse, status, message, quoteResponse) : null}
      {}
      {console.log(quoteResponse)}
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
          value={enquiry_desc}
          onChange={(event) => {
            setEnquiryDesc(event.target.value);
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
            value={wanna_pay}
            onChange={(event) => {
              setWannaPay(event.target.value);
            }}
          />
        </div>
        <div class="blank-input">
          <img src="images jpg/landing/people.png" alt="" />
          <input
            type="number"
            id="user_count"
            min="1"
            value={user_count}
            onChange={(event) => {
              setUserCount(event.target.value);
            }}
          />
        </div>
        <div class="radio">
          <ul class="select-type" value={serving_type}>
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
                      setServingType(x.key);
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
            value={delivery_on}
            onChange={(event) => {
              setDeliveryDate(event.target.value);
            }}
          />
        </div>
      </div>
      <div class="quote-confirm">
        <button type="submit">PUKKAO</button>
      </div>
    </form>
  );
}
let showMessage = (setQuoteResponse, status, message, quoteResponse) => {
  console.log("ffffffffffffffffffffffffffffffffff");
  if (status == "pending") {
    return <div class="message message-gray quoteResponse"><label >sending data...</label><button onClick={() => {
      setQuoteResponse(quoteResponse = false);
    }
    }>X</button> </div>
  } else if (status == "rejected") {
    return <div class="message message-red quoteResponse"><label >{message}</label> <button onClick={() => {
      setQuoteResponse(quoteResponse = false);
    }
    }>X</button></div>
  } else if (status == "fulfilled") {
    return <div class="message message-green quoteResponse"><label >{message}</label><button onClick={() => {
      setQuoteResponse(quoteResponse = false);
    }
    }>X</button> </div>
  } else {
    return <></>
  }
}
export default Quote;
