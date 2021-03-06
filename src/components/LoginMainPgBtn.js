import React, { useState } from "react";
import { clearToken } from "./StoreAndSlices/HandleLogin";
import { useDispatch, useSelector } from "react-redux";

function LoginMainPgBtn(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  if (token == "") {
    return (
      <>
        <label
          onClick={() => {
            props.onClick();
          }}
        >
          Login
        </label>
      </>
    );
  } else {
    return (
      <>
        <label
          onClick={() => {
            dispatch(clearToken());
          }}
        >
          Logout
        </label>
      </>
    );
  }
}

export default LoginMainPgBtn;
