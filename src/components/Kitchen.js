import React from "react";
import "../App.css";
import { Link} from "react-router-dom";

function Kitchen(props) {
  return (
    <>
        <Link to="/TestingRouter" class="kitchen" key={props.data.hotel_name}>
          <div class="kitchenImage">
            <img src={props.data.hotel_image} alt="" />
          </div>
          <div class="kitchenName">{props.data.hotel_name}</div>
          <div class="kitchenRating">
            {props.data.rating_total}
          </div>
          <div class="type">{(props.data.cuisine_name).substr(0,35)+"..."}</div>
          <div class="foodCost">Cost for 2: Rs.{props.data.cost_for_2}</div>
          <div class="kitchenReviews">{props.data.rating_num}</div>
        </Link>
    </>
  );
}

export default Kitchen;
