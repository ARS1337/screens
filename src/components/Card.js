import React from "react";
import Kitchen from "./Kitchen";

function Card() {
  return (
    <>
      <Kitchen
        type="North Indian, Chinese"
        reviews="778 Reviews"
        foodCost="Cost for 2: Rs.150"
        kitchenName="Mama's kitchen"
        kitchenImage="images jpg/landing/MamaKitchen.png"
        ratingImage="images jpg/Reviews/Rating.png"
      />
    </>
  );
}

export default Card;
