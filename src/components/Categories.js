import React from "react";
import { useSelector } from "react-redux";

function Categories() {
  let categories = useSelector((state) => state.masterData.categories);
  let doneLoading = useSelector((state) => state.masterData.doneLoading);
  if (doneLoading == "pending") {
    return <div class="loader"></div>;
  } else if (doneLoading == "rejected") {
    return <div class="loadFailed">Couldn't Load Data</div>;
  } else {
    return (
      <>
        <div class="types-2rows">
          <div class="types-row">
            {categories.slice(0, 5).map((x) => {
              return (
                <div class="types" key={x.key}>
                  <img src={x.web_image} alt="" />
                  <span>{x.value}</span>
                </div>
              );
            })}
          </div>
          <div class="types-row">
            {categories.slice(5, 10).map((x) => {
              return (
                <div class="types" key={x.key}>
                  <img src={x.web_image} alt="" />
                  <span>{x.value}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div class="types-row-last">
          {categories.slice(10, 11).map((x) => {
            return (
              <div class="types" key={x.key}>
                <img src={x.web_image} alt="" />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Categories;
