import React from "react";
import "../App.css";
import { Link, Route, Switch } from "react-router-dom";

function Kitchen(props) {
  return (
    <>
      {console.log(props)}
      <div class="kitchen">
        <Link to="/TestingRouter">
          <div class="kitchenImage">
            <img src={props.kitchenImage} alt="" />
          </div>
          <div class="kitchenName">{props.kitchenName}</div>
          <div class="kitchenRating">
            <img src={props.ratingImage} alt="" />
          </div>
          <div class="type">{props.type}</div>
          <div class="foodCost">{props.foodCost}</div>
          <div class="kitchenReviews">{props.reviews}</div>
        </Link>
      </div>
    </>
  );
}

export default Kitchen;
