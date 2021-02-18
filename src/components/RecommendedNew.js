import React from "react";
import Kitchen from "./Kitchen";
import { useSelector } from "react-redux";

function RecommendedNew() {
  let token = useSelector((state) => state.token.token);
  let recommended = useSelector((state) => state.otherData.recommended);

  return (
    <>
      {token !== "" && recommended !== undefined && recommended !== null ? (
        <h1>Recommended</h1>
      ) : (
        ""
      )}
      <div class="exploreKitchen-content">
        {token !== "" && recommended !== undefined && recommended !== null
          ? 
              <Kitchen data="recommended" />
            
          : ""}
        {console.log("RecommededNew")}
      </div>
    </>
  );
}

export default RecommendedNew;
