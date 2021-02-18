import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import { Link } from "react-router-dom";

function Kitchen(props) {
  let temp = useSelector((state) => state.otherData[props.data]).slice(0, 3);
  console.log("temp is useselector........ "+temp);
  return temp.map((x) => {
    return (
      <>
        <Link to="/TestingRouter" class="kitchen" key={x.hotel_name}>
          <div class="kitchenImage">
            <img src={x.hotel_image} alt="" />
          </div>
          <div class="kitchenName">{x.hotel_name}</div>
          <div class="kitchenRating">{x.rating_total}</div>
          <div class="type">{x.cuisine_name.substr(0, 35) + "..."}</div>
          <div class="foodCost">Cost for 2: Rs.{x.cost_for_2}</div>
          <div class="kitchenReviews">{x.rating_num}</div>
        </Link>
      </>
    );
  });
}

export default Kitchen;
