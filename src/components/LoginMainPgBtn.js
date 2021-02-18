import React from "react";
import { clearToken } from "./StoreAndSlices/HandleLogin";
import { useDispatch, useSelector } from "react-redux";

function LoginMainPgBtn() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  if (token == "") {
    return (
      <label
        onClick={() => {
          document.getElementById("login-container").style.display = "block";
        }}
      >
        Login
      </label>
    );
  } else {
    return (
      <label
        onClick={() => {
          dispatch(clearToken());
        }}
      >
        Logout
      </label>
    );
  }
}

export default LoginMainPgBtn;
