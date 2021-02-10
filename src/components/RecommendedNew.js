import React from "react";
import Kitchen from "./Kitchen";

function RecommendedNew(props) {
  return (
    <>
      {props.data.token !== "" &&
      props.data.recommended !== undefined &&
      props.data.recommended !== null ? (
        <h1>Recommended</h1>
      ) : (
        ""
      )}
      <div class="exploreKitchen-content">
        {
        props.data.token !== "" &&
        props.data.recommended !==undefined &&
        props.data.recommended !==null
          ? props.data.recommended.slice(0, 3).map((x) => {
              return <Kitchen data={x} />;
            })
          : ""}
          {console.log("RecommededNew")}
      </div>
    </>
  );
}

export default RecommendedNew;
