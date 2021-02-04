import React from "react";

function Categories(props) {
  return (
    <>
      <div class="types" key={props.data.key}>
        <img src={props.data.web_image} alt="" />
        <br />
        <span>{props.data.value}</span>
      </div>
    </>
  );
}

export default Categories;
