import React from "react";
import "../App.css";
import { Link, Route, Switch } from "react-router-dom";

function Kitchen(props) {
  return (
    <>
      <div class="kitchen" key={props.data.hotel_name}>
        <Link to="/TestingRouter">
          <div class="kitchenImage">
            <img src={props.data.hotel_image} alt="" />
          </div>
          <div class="kitchenName">{props.data.hotel_name}</div>
          <div class="kitchenRating">
            {props.data.rating_total}
          </div>
          <div class="type">{props.data.cuisine_name}</div>
          <div class="foodCost">{props.data.cost_for_2}</div>
          <div class="kitchenReviews">{props.data.rating_num}</div>
        </Link>
      </div>
    </>
  );
}

export default Kitchen;
